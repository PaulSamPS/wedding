import { forwardRef } from 'react';

interface PearlCardProps {
  children: React.ReactNode;
  shimmerColor?: string;
  background?: string;
  border?: string;
  boxShadow?: string;
  borderRadius?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const PearlCard = forwardRef<HTMLDivElement, PearlCardProps>(
  function PearlCard(
    {
      children,
      shimmerColor,
      background = 'linear-gradient(145deg, #ffffff, #f8f6f2)',
      border = '1px solid rgba(195,212,187,0.45)',
      boxShadow = '0 1px 0 rgba(255,255,255,0.9) inset, 0 8px 32px rgba(36,61,30,0.04)',
      borderRadius = '24px',
      className,
      style,
    },
    ref,
  ) {
    return (
      <div
        ref={ref}
        className={`relative overflow-hidden${className ? ` ${className}` : ''}`}
        style={{
          background,
          border,
          boxShadow,
          borderRadius,
          ...style,
        }}
      >
        {shimmerColor && (
          <div
            aria-hidden='true'
            style={{
              position: 'absolute',
              top: 0,
              left: '8%',
              right: '8%',
              height: '1px',
              background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.9) 40%, ${shimmerColor} 60%, transparent)`,
            }}
          />
        )}
        {children}
      </div>
    );
  },
);

export type { PearlCardProps };
