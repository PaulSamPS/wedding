'use client';

import { EucalyptusBranch, SectionLabel, PearlDivider } from '@/components/botanical';
import { SectionWatermark } from '@/shared/ui/section-watermark';
import { PearlDot } from '@/shared/ui/pearl-dot';
import { useReveal } from '@/shared/hooks/use-reveal';
import Image from 'next/image';

const DETAILS = [
  'Бесплатная парковка на территории',
  '8 июля 2026 — сбор гостей с 14:30',
  'Дресс-код — нежные, натуральные оттенки',
];

export default function VenueSection() {
  const r1 = useReveal();
  const r2 = useReveal(80);
  const r3 = useReveal(180);

  return (
    <section
      id='venue'
      className='relative py-15 md:py-35 px-6 overflow-hidden'
      style={{ background: '#fff' }}
    >
      {/* Botanical bottom-right */}
      {/*<div className='absolute bottom-0 left-0 pointer-events-none select-none' aria-hidden='true'>*/}
      {/*  <EucalyptusBranch width={160} height={210} opacity={0.06} style={{ display: 'block' }} />*/}
      {/*</div>*/}

      <SectionWatermark />

      <div className='max-w-6xl mx-auto'>
        {/* Label */}
        <div ref={r1} className='reveal-block mb-15 md:mb-23'>
          <SectionLabel number='03' text='Место проведения' />
        </div>

        <div className='grid md:grid-cols-2 gap-12 md:gap-20 items-start'>
          {/* Text */}
          <div ref={r2} className='reveal-block flex flex-col gap-8'>
            <h2
              className='text-balance leading-[0.9] text-center'
              style={{
                fontSize: 'clamp(3rem, 8vw, 5.5rem)',
                fontWeight: 300,
                letterSpacing: '-0.04em',
                color: 'var(--green)',
                fontFamily: 'var(--font-florisel)',
              }}
            >
              {'Дача Мон Шер'}
            </h2>

            <PearlDivider />

            <address
              className='not-italic font-sans leading-loose'
              style={{ fontSize: '13px', fontWeight: 300, color: 'var(--ink)', opacity: 0.42 }}
            >
              {'Оренбург'}
              <br />
              {'СНТ "Ветераны Советской Армии, 11'}
            </address>

            <ul className='flex flex-col gap-3.5'>
              {DETAILS.map((d, i) => (
                <li key={i} className='flex items-center gap-3'>
                  {/* Pearl bullet */}
                  <PearlDot size={7} borderOpacity={0.85} />
                  <span
                    className='font-sans'
                    style={{
                      fontSize: '13px',
                      fontWeight: 300,
                      color: 'var(--ink)',
                      opacity: 0.48,
                    }}
                  >
                    {d}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href='https://maps.google.com/maps?q=51.7409613,55.1072198'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex bg-primary text-primary-foreground items-center gap-2.5 font-sans self-start transition-all duration-200 hover:opacity-75'
              style={{
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                padding: '12px 24px',
                borderRadius: '100px',
              }}
            >
              {'Открыть на карте'}
              <svg width='10' height='10' viewBox='0 0 10 10' fill='none' aria-hidden='true'>
                <path
                  d='M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5'
                  stroke='currentColor'
                  strokeWidth='1.3'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>
          </div>

          {/* Map with pearl border */}
          <div
            ref={r3}
            className='reveal-block reveal-delay-2 rounded-[28px] overflow-hidden relative bg-primary'
            style={{
              aspectRatio: '16 / 9',
            }}
          >
            {/*<iframe*/}
            {/*  title='Дача MON CHER'*/}
            {/*  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500!2d55.1072198!3d51.7409613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x417bf1425353de7f:0x522fac80df55c0ab!2z0JTQsNGJ0LAgTU9OIENIRVI!5e0!3m2!1sru!2sru!4v1700000000000!5m2!1sru!2sru'*/}
            {/*  className='w-full h-full border-0'*/}
            {/*  loading='lazy'*/}
            {/*  referrerPolicy='no-referrer-when-downgrade'*/}
            {/*  style={{ filter: 'grayscale(0.25) brightness(1.02) contrast(0.97)' }}*/}
            {/*/>*/}
            <Image
              src='moncher.webp'
              alt='moncher'
              width={500}
              height={500}
              className='w-full h-full object-contain'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
