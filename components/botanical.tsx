import React from 'react';
import Image from 'next/image';
import { PearlDot } from '@/shared/ui/pearl-dot';

/* ─── Shared botanical + pearl decorative elements ─────────────────── */
export function Jem4ug({
  width = 80,
  height = 110,
  opacity = 0.14,
  flip = false,
  style,
}: {
  width?: number;
  height?: number;
  opacity?: number;
  flip?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <Image
      src='jemchug.png'
      alt='jemchug'
      width={width}
      height={height}
      style={{ transform: flip ? 'scaleX(-1)' : undefined, ...style }}
    />
  );
}

/** Single eucalyptus branch SVG. flip=true mirrors it horizontally. */
export function EucalyptusBranch({
  width = 80,
  height = 110,
  opacity = 0.14,
  flip = false,
  style,
}: {
  width?: number;
  height?: number;
  opacity?: number;
  flip?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <Image
      src='/evcalipt-3.png'
      alt='evcalipt'
      width={width}
      height={height}
      style={{ transform: flip ? 'scaleX(-1)' : undefined, ...style }}
    />
  );
}

/** Wide horizontal eucalyptus garland for section dividers */
export function EucalyptusGarland({
  width = 120,
  height = 150,
  opacity = 0.14,
  flip = false,
  style,
}: {
  width?: number;
  height?: number;
  opacity?: number;
  flip?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <div>
      <Image
        src='/evcalipt.png'
        alt='evcalipt'
        width={width}
        height={height}
        style={{ transform: flip ? 'scaleX(-1)' : undefined, ...style }}
      />
      <Image
        src='/evcalipt.png'
        alt='evcalipt'
        width={width}
        height={height}
        style={{ transform: flip ? 'scaleX(-1)' : undefined, ...style }}
      />
    </div>
  );
}

/** Pearl line — a shimmering horizontal rule */
export function PearlDivider({ className }: { className?: string }) {
  return (
    <div
      className={className}
      aria-hidden='true'
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <div
        style={{
          flex: 1,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--border-c) 60%)',
        }}
      />
      <PearlDot size={5} />
      <div
        style={{
          flex: 1,
          height: '1px',
          background: 'linear-gradient(90deg, var(--border-c) 40%, transparent)',
        }}
      />
    </div>
  );
}

/** Section eyebrow chip */
export function SectionLabel({ number, text }: { number: string; text: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '8px',
          fontWeight: 600,
          letterSpacing: '0.44em',
          textTransform: 'uppercase',
          color: 'var(--green)',
          opacity: 0.5,
          whiteSpace: 'nowrap',
        }}
      >
        {number} — {text}
      </span>
      <div
        style={{
          flex: 1,
          height: '1px',
          background: 'linear-gradient(90deg, var(--border-c), transparent)',
        }}
      />
    </div>
  );
}
