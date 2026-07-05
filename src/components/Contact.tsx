import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Section } from './Section';
import { Reveal } from './motion/Reveal';
import { profile } from '@/data/profile';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

// EmailJS keys via env (playbook §4 / MWASUE pattern). See .env.example.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = async (data: FormValues) => {
    setStatus('sending');
    try {
      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        // No keys configured yet — fall back to a mailto so the form still works.
        window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
          `Portfolio enquiry from ${data.name}`,
        )}&body=${encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`)}`;
        setStatus('sent');
        reset();
        return;
      }
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { from_name: data.name, reply_to: data.email, message: data.message },
        { publicKey: PUBLIC_KEY },
      );
      setStatus('sent');
      reset();
    } catch {
      setStatus('error');
    }
  };

  const field =
    'w-full rounded-md border border-navy-700 bg-navy-800/60 px-4 py-2.5 text-ink-100 placeholder:text-ink-400 focus:border-accent focus:outline-none';

  return (
    <Section id="contact" num="06" title="Get in touch">
      <Reveal>
        <p className="max-w-xl leading-relaxed text-ink-300">
          I'm open to full-stack developer and QA roles, freelance projects, and remote
          collaboration. Whether you have a question or just want to say hi, my inbox is open —
          I'll get back to you.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mono mt-4 inline-flex items-center gap-2 text-accent hover:underline"
        >
          <Mail size={16} /> {profile.email}
        </a>
      </Reveal>

      <Reveal>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-8 max-w-xl space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mono mb-1.5 block text-xs uppercase tracking-wider text-ink-400">
                Name
              </label>
              <input
                id="name"
                className={field}
                placeholder="Your name"
                aria-invalid={!!errors.name}
                {...register('name', { required: 'Please add your name' })}
              />
              {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="mono mb-1.5 block text-xs uppercase tracking-wider text-ink-400">
                Email
              </label>
              <input
                id="email"
                type="email"
                className={field}
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
                {...register('email', {
                  required: 'Please add your email',
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
                })}
              />
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mono mb-1.5 block text-xs uppercase tracking-wider text-ink-400">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className={`${field} resize-y`}
              placeholder="What would you like to build or discuss?"
              aria-invalid={!!errors.message}
              {...register('message', {
                required: 'Please add a message',
                minLength: { value: 10, message: 'A little more detail helps' },
              })}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-2.5 font-semibold text-navy-950 transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              <Send size={16} />
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'sent' && (
              <span className="inline-flex items-center gap-1.5 text-sm text-accent">
                <CheckCircle2 size={16} /> Thanks — I'll be in touch.
              </span>
            )}
            {status === 'error' && (
              <span className="inline-flex items-center gap-1.5 text-sm text-red-400">
                <AlertCircle size={16} /> Something went wrong — email me directly.
              </span>
            )}
          </div>
        </form>
      </Reveal>
    </Section>
  );
}
