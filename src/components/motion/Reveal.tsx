import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in seconds (playbook: durations 0.2–0.4s) */
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'article' | 'header' | 'footer';
}

/**
 * Reusable scroll reveal (playbook §2):
 *  - whileInView + viewport once:true → fires once, not on every scroll
 *  - animates only GPU-composited props (y, opacity)
 *  - respects prefers-reduced-motion
 */
export function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
