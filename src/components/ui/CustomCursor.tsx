import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'book' | 'card' | 'copy'>('default');
  const [cursorText, setCursorText] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // Smooth spring physics for cursor follow
  const cursorX = useSpring(0, { stiffness: 800, damping: 35 });
  const cursorY = useSpring(0, { stiffness: 800, damping: 35 });

  useEffect(() => {
    // Check for touch device or reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (prefersReducedMotion || isTouchDevice) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Inspect target element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor') as any;
        const text = cursorTarget.getAttribute('data-cursor-text') || '';
        setCursorType(type);
        setCursorText(text);
        return;
      }

      // Check standard interactive tags
      const interactive = target.closest('button, a, input, textarea, [role="button"]');
      if (interactive) {
        setCursorType('pointer');
        setCursorText('');
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouch || !isVisible) return null;

  const isSpecial = cursorType === 'book' || cursorType === 'card' || cursorType === 'copy';

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      {/* Outer Spring Ring */}
      <motion.div
        animate={{
          scale: isSpecial ? 2.4 : cursorType === 'pointer' ? 1.5 : 1,
          backgroundColor: isSpecial
            ? 'rgba(15, 23, 42, 0.85)'
            : cursorType === 'pointer'
            ? 'rgba(194, 94, 52, 0.15)'
            : 'rgba(15, 23, 42, 0.05)',
          borderColor: isSpecial
            ? '#D4AF37'
            : cursorType === 'pointer'
            ? '#C25E34'
            : 'rgba(30, 41, 59, 0.4)',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        className="w-8 h-8 rounded-full border border-dashed flex items-center justify-center backdrop-blur-[2px] transition-colors"
      >
        {/* Context Text Indicator */}
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[8px] font-mono font-bold uppercase tracking-wider text-amber-300"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Center Fine Dot */}
      {!isSpecial && (
        <motion.div
          animate={{
            scale: cursorType === 'pointer' ? 0.6 : 1,
            backgroundColor: cursorType === 'pointer' ? '#C25E34' : '#0F172A',
          }}
          className="w-1.5 h-1.5 rounded-full absolute"
        />
      )}
    </motion.div>
  );
};
