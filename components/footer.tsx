import { PearlDivider } from '@/components/botanical';
import { SectionWatermark } from '@/shared/ui/section-watermark';
import { GuestCount } from '@/components/guest-count';

export default function Footer() {
  return (
    <footer
      className='relative py-15 md:py-35 px-6 overflow-hidden'
      style={{ background: 'var(--off-white)', borderTop: '1px solid var(--border-c)' }}
    >
      <SectionWatermark fontSize='clamp(14rem, 38vw, 30rem)' opacity={0.025} />

      <div className='max-w-4xl mx-auto relative z-10 flex flex-col items-center gap-6'>
        {/* Monogram */}
        <p
          style={{
            fontSize: 'clamp(2.2rem, 6vw, 3.2rem)',
            fontWeight: 300,
            color: 'var(--ink)',
            letterSpacing: '0.06em',
            opacity: 0.75,
            fontFamily: 'var(--font-florisel)',
          }}
        >
          {'П & Е'}
        </p>

        {/* Pearl divider */}
        <PearlDivider className='w-48' />

        {/* Date */}
        <p
          className='font-sans'
          style={{
            fontSize: '9px',
            fontWeight: 600,
            letterSpacing: '0.38em',
            textTransform: 'uppercase',
            color: 'var(--ink)',
            opacity: 0.25,
          }}
        >
          {'08 · 07 · 2026'}
        </p>

        {/* Tagline */}
        <p
          style={{
            fontSize: '11px',
            fontWeight: 600,
            color: 'var(--ink)',
            opacity: 0.25,
            letterSpacing: '0.08em',
          }}
        >
          {'С любовью сделано для вас'}
        </p>

        {/* Guest count */}
        <GuestCount />
      </div>
    </footer>
  );
}
