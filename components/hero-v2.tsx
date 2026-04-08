import Countdown from '@/components/timer';
import { EucalyptusBranch, Jem4ug, PearlDivider } from '@/components/botanical';
import { SectionWatermark } from '@/shared/ui/section-watermark';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      id='top'
      suppressHydrationWarning
      className='max-w-7xl mx-auto px-6 pb-15 md:pb-35 relative min-h-screen flex flex-col items-center justify-end overflow-hidden'
      style={{ background: '#ffffff' }}
    >
      <div className='absolute -top-10 pointer-events-none select-none'>
        <Jem4ug
          width={800}
          height={300}
          style={{
            width: 'clamp(180px, 80vw, 800px)',
            height: 'auto',
            maxHeight: '300px',
            objectFit: 'contain',
          }}
        />
      </div>
      {/* Botanical corners — large, very faint */}
      <div
        className='absolute -top-5 -left-2 pointer-events-none select-none z-20'
        aria-hidden='true'
      >
        <EucalyptusBranch
          width={240}
          height={290}
          opacity={0.1}
          style={{ display: 'block', width: 'clamp(120px, 30vw, 340px)', height: 'auto' }}
        />
      </div>
      <div
        className='absolute -top-5 -right-2 pointer-events-none select-none z-20'
        aria-hidden='true'
      >
        <EucalyptusBranch
          width={240}
          height={290}
          opacity={0.1}
          flip
          style={{ display: 'block', width: 'clamp(120px, 30vw, 340px)', height: 'auto' }}
        />
      </div>

      <SectionWatermark />

      {/* Main content */}
      <div className='relative z-10 flex flex-col items-center text-center w-full max-w-2xl pt-[200px] sm:pt-[400px]'>
        {/* Names */}
        <h1
          className='leading-[0.88] hero-enter hero-enter-delay-1'
          style={{
            fontSize: 'clamp(5.5rem, 22vw, 12rem)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            color: 'var(--green)',
            fontFamily: 'var(--font-florisel)',
          }}
        >
          {'Павел'}
        </h1>

        {/* Ampersand with tiny pearl dots */}
        <div
          className='flex items-center gap-3 my-1 hero-enter hero-enter-delay-1'
          aria-hidden='true'
        >
          <p
            className='font-serif italic'
            style={{
              fontSize: 'clamp(2rem, 6vw, 3.8rem)',
              fontWeight: 300,
              opacity: 0.5,
              lineHeight: 1,
              fontFamily: 'var(--font-florisel)',
              color: 'var(--green)',
            }}
          >
            {'&'}
          </p>
        </div>

        <h1
          className='leading-[0.88] mb-10 md:mb-13 hero-enter hero-enter-delay-2'
          style={{
            fontSize: 'clamp(5.5rem, 22vw, 12rem)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            color: 'var(--green)',
            fontFamily: 'var(--font-florisel)',
          }}
        >
          {'Екатерина'}
        </h1>

        {/* Pearl divider */}
        <div className='w-full max-w-xs mb-10 mt-5 hero-enter hero-enter-delay-2'>
          <PearlDivider />
        </div>

        {/* Date / venue chip */}
        <div
          className='flex items-center gap-3 px-6 py-3 rounded-full mb-2 hero-enter hero-enter-delay-3'
          style={{
            background: 'linear-gradient(135deg, #ffffff, #f7f6f4)',
            border: '1px solid rgba(195,212,187,0.55)',
            boxShadow: '0 1px 0 rgba(255,255,255,0.9) inset',
          }}
        >
          <div
            style={{
              width: '3px',
              height: '3px',
              borderRadius: '50%',
              background: 'var(--green)',
              opacity: 0.2,
            }}
            aria-hidden='true'
          />
          <span
            className='font-sans'
            style={{
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--ink)',
              opacity: 0.4,
            }}
          >
            {'8 июля 2026'}
          </span>
          <div
            style={{
              width: '3px',
              height: '3px',
              borderRadius: '50%',
              background: 'var(--green)',
              opacity: 0.2,
            }}
            aria-hidden='true'
          />
        </div>

        {/* Countdown */}
        <div className='mt-6 hero-enter hero-enter-delay-4'>
          <Countdown />
        </div>

        {/* Pearl divider */}
        <div className='w-full max-w-xs mb-10 mt-5 hero-enter hero-enter-delay-2'>
          <PearlDivider />
        </div>

        {/* CTAs */}
        <div className='flex flex-col sm:flex-row items-center gap-3 hero-enter hero-enter-delay-5'>
          <a
            href='#rsvp'
            className='font-sans bg-primary transition-all duration-200 hover:opacity-80'
            style={{
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              padding: '14px 32px',
              borderRadius: '100px',
              // background: 'var(--green)',
              color: '#fff',
            }}
          >
            {'Подтвердить присутствие'}
          </a>
          <a
            href='#program'
            className='font-sans transition-all duration-200 hover:opacity-60'
            style={{
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              padding: '13px 32px',
              borderRadius: '100px',
              color: 'var(--ink)',
              border: '1px solid var(--border-c)',
            }}
          >
            {'Программа дня'}
          </a>
        </div>
      </div>
    </section>
  );
}
