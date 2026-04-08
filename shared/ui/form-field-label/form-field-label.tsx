interface FormFieldLabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  letterSpacing?: string;
  color?: string;
  opacity?: number;
  className?: string;
}

export function FormFieldLabel({
  children,
  htmlFor,
  letterSpacing = '0.34em',
  color = 'var(--ink)',
  opacity = 0.32,
  className,
}: FormFieldLabelProps) {
  const style: React.CSSProperties = {
    fontSize: '8px',
    fontWeight: 600,
    letterSpacing,
    textTransform: 'uppercase' as const,
    color,
    opacity,
  };

  if (htmlFor) {
    return (
      <label htmlFor={htmlFor} className={`block font-sans mb-2${className ? ` ${className}` : ''}`} style={style}>
        {children}
      </label>
    );
  }

  return (
    <p className={`font-sans mb-2.5${className ? ` ${className}` : ''}`} style={style}>
      {children}
    </p>
  );
}

export type { FormFieldLabelProps };
