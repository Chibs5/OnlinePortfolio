import { useEffect, useState } from 'react';
import { useReducedMotion } from 'motion/react';

/**
 * Soft radial "spotlight" glow that follows the cursor on the dark background
 * (playbook §2 restrained touch). Pure CSS radial-gradient positioned by JS.
 * Disabled for reduced-motion users and on touch/coarse pointers.
 */
export function Spotlight() {
  const reduce = useReducedMotion();
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (reduce) return;
    if (window.matchMedia('(pointer: fine)').matches) setEnabled(true);
  }, [reduce]);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(52,211,153,0.06), transparent 40%)`,
      }}
    />
  );
}
