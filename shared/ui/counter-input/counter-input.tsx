'use client';

interface CounterInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  ariaDecrementLabel?: string;
  ariaIncrementLabel?: string;
  className?: string;
}

const fieldStyle: React.CSSProperties = {
  background: 'linear-gradient(145deg, #ffffff, #f7f6f4)',
  border: '1px solid rgba(195,212,187,0.5)',
  color: 'var(--ink)',
  boxShadow: '0 1px 0 rgba(255,255,255,0.9) inset',
};

const btnStyle: React.CSSProperties = {
  background: 'var(--stone)',
  color: 'var(--ink)',
  fontSize: '18px',
};

export function CounterInput({
  value,
  onChange,
  min = 0,
  max = 10,
  ariaDecrementLabel = 'Уменьшить',
  ariaIncrementLabel = 'Увеличить',
  className,
}: CounterInputProps) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl${className ? ` ${className}` : ''}`}
      style={fieldStyle}
    >
      <button
        type='button'
        onClick={() => onChange(Math.max(min, value - 1))}
        className='w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:opacity-70'
        style={btnStyle}
        aria-label={ariaDecrementLabel}
      >
        &minus;
      </button>
      <span
        className='font-serif text-xl flex-1 text-center tabular-nums'
        style={{ fontWeight: 300, color: 'var(--ink)' }}
      >
        {value}
      </span>
      <button
        type='button'
        onClick={() => onChange(Math.min(max, value + 1))}
        className='w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:opacity-70'
        style={btnStyle}
        aria-label={ariaIncrementLabel}
      >
        +
      </button>
    </div>
  );
}

export type { CounterInputProps };
