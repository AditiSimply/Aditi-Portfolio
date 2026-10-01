import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  pullFactor?: number;
  highlightColor?: string;
  dataCursor?: string;
  dataCursorText?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  pullFactor = 0.25,
  highlightColor = 'rgba(224, 99, 56, 0.25)',
  dataCursor = 'pointer',
  dataCursorText,
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const smoothX = useSpring(0, { stiffness: 350, damping: 22 });
  const smoothY = useSpring(0, { stiffness: 350, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    smoothX.set(middleX * pullFactor);
    smoothY.set(middleY * pullFactor);
    setCoords({ x: clientX - left, y: clientY - top });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    smoothX.set(0);
    smoothY.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.96 }}
      style={{
        x: smoothX,
        y: smoothY,
      }}
      data-cursor={dataCursor}
      data-cursor-text={dataCursorText}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Expanding radial cursor highlight */}
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 2.5 : 0.8,
        }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        style={{
          left: coords.x,
          top: coords.y,
          background: `radial-gradient(circle, ${highlightColor} 0%, transparent 70%)`,
        }}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full pointer-events-none"
      />

      {/* Button content */}
      <div className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </div>
    </motion.button>
  );
};
