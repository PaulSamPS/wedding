interface PearlDotProps {
  size?: number;
  opacity?: number;
  borderOpacity?: number;
  withGlow?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function PearlDot({
  size = 5,
  opacity = 0.5,
  borderOpacity = 0.6,
  withGlow = false,
  className,
  style,
}: PearlDotProps) {
  return (
    <span
      className={className}
      aria-hidden='true'
      style={{
        display: 'inline-block',
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        background: `linear-gradient(135deg, #fff 20%, rgba(195,212,187,${opacity}))`,
        border: `1px solid rgba(195,212,187,${borderOpacity})`,
        flexShrink: 0,
        boxShadow: withGlow
          ? `0 0 0 3px rgba(195,212,187,0.15), 0 0 0 1px rgba(255,255,255,0.8) inset`
          : '0 0 0 1px rgba(255,255,255,0.8) inset',
        ...style,
      }}
    />
  );
}

export type { PearlDotProps };
