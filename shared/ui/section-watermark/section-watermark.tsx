interface SectionWatermarkProps {
  text?: string;
  fontSize?: string;
  opacity?: number;
  className?: string;
}

export function SectionWatermark({
  text = 'ПЕ',
  fontSize = 'clamp(16rem, 42vw, 34rem)',
  opacity = 0.02,
  className,
}: SectionWatermarkProps) {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center pointer-events-none select-none${className ? ` ${className}` : ''}`}
      aria-hidden='true'
    >
      <span
        style={{
          fontSize,
          fontWeight: 300,
          color: 'var(--green)',
          opacity,
          letterSpacing: '-0.07em',
          lineHeight: 1,
          fontFamily: 'var(--font-florisel)',
        }}
      >
        {text}
      </span>
    </div>
  );
}

export type { SectionWatermarkProps };
