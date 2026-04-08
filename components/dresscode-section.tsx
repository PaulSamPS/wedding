'use client';

import { EucalyptusBranch, EucalyptusGarland, SectionLabel } from '@/components/botanical';
import { SectionWatermark } from '@/shared/ui/section-watermark';
import { PearlCard } from '@/shared/ui/pearl-card';
import { FormFieldLabel } from '@/shared/ui/form-field-label';
import { useReveal } from '@/shared/hooks/use-reveal';

const SWATCHES = [
  { color: '#d4b896', label: 'Пудровый' },
  { color: '#c2ae98', label: 'Бежевый' },
  { color: '#8aaa7a', label: 'Эвкалипт' },
  { color: '#b5c8ac', label: 'Шалфей' },
  { color: '#e4ddd3', label: 'Айвори' },
];

export default function DressCodeSection() {
  const r1 = useReveal();
  const r2 = useReveal(80);
  const r3 = useReveal(150);
  const r4 = useReveal(220);

  return (
    <section
      id='dresscode'
      className='relative py-15 md:py-35 px-6 overflow-hidden'
      style={{ background: 'var(--off-white)' }}
    >
      <SectionWatermark />

      <div className='max-w-5xl mx-auto'>
        {/* Label */}
        <div ref={r1} className='reveal-block mb-15 md:mb-23'>
          <SectionLabel number='04' text='Дресс-код' />
        </div>

        {/* Heading + palette */}
        <div ref={r2} className='reveal-block mb-15 md:mb-23'>
          <h2
            className='text-balance leading-[0.92] mb-15 md:mb-23'
            style={{
              fontSize: 'clamp(2.8rem, 8vw, 5.8rem)',
              fontWeight: 300,
              letterSpacing: '-0.04em',
              color: 'var(--green)',
              fontFamily: 'var(--font-florisel)',
            }}
          >
            {'Палитра торжества'}
          </h2>
          <p
            className='font-sans mb-10'
            style={{
              fontSize: '13px',
              fontWeight: 300,
              color: 'var(--ink)',
              opacity: 0.4,
              maxWidth: '30rem',
            }}
          >
            {
              'Мы очень ждём и готовимся к нашему незабываемому дню! Поддержите нас Вашими улыбками и объятиями, а также красивыми нарядами в палитре мероприятия'
            }
          </p>

          {/* Swatches */}
          <div className='flex items-end justify-center md:justify-start gap-5 flex-wrap'>
            {SWATCHES.map((s, i) => {
              const sz = 24 + i * 5;
              return (
                <div key={s.color} className='flex flex-col items-center gap-2.5'>
                  <div
                    className='rounded-full transition-transform duration-300 hover:scale-110 cursor-default'
                    style={{
                      width: `${sz}px`,
                      height: `${sz}px`,
                      background: s.color,
                      border: '1.5px solid rgba(0,0,0,0.06)',
                      boxShadow:
                        '0 1px 4px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.7) inset',
                    }}
                    aria-label={s.label}
                  />
                  <span
                    className='font-sans'
                    style={{
                      fontSize: '7px',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--ink)',
                      opacity: 0.32,
                    }}
                  >
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Two tiles */}
        <div className='grid md:grid-cols-2 gap-5 mb-16'>
          {/* Ladies tile */}
          <PearlCard
            ref={r3}
            className='reveal-block relative p-8 md:p-10'
            shimmerColor='rgba(212,184,150,0.4)'
            background='linear-gradient(145deg, #ffffff 0%, #f8f6f2 55%, #f2ede7 100%)'
            border='1px solid rgba(212,184,150,0.35)'
            boxShadow='0 1px 0 rgba(255,255,255,0.9) inset, 0 8px 32px rgba(36,61,30,0.04)'
            borderRadius='24px'
          >
            {/* Corner botanical */}
            <div className='absolute top-0 right-0 opacity-50' aria-hidden='true'>
              <EucalyptusBranch width={70} height={90} flip style={{ display: 'block' }} />
            </div>
            <FormFieldLabel letterSpacing='0.42em' opacity={0.3} className='mb-5'>
              {'Для дам'}
            </FormFieldLabel>
            <h3
              className='font-serif leading-tight mb-4'
              style={{
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                fontWeight: 300,
                color: 'var(--ink)',
                letterSpacing: '-0.02em',
              }}
            >
              {'Вечерние и коктейльные платья'}
            </h3>
            <p
              className='font-sans leading-relaxed mb-6'
              style={{
                fontSize: '13px',
                fontWeight: 300,
                color: 'var(--ink)',
                opacity: 0.45,
                maxWidth: '22rem',
              }}
            >
              {'Платья в палитре торжества. Пожалуйста, избегайте белого цвета.'}
            </p>
            <div
              className='inline-flex items-center gap-2 px-4 py-2 rounded-full'
              style={{
                background: 'rgba(212,184,150,0.15)',
                border: '1px solid rgba(212,184,150,0.4)',
              }}
            >
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#b89070',
                  opacity: 0.6,
                }}
                aria-hidden='true'
              />
              <span
                className='font-sans'
                style={{ fontSize: '10px', fontWeight: 400, color: 'var(--ink)', opacity: 0.55 }}
              >
                {'Избегайте белого цвета'}
              </span>
            </div>
          </PearlCard>

          {/* Gents tile */}
          <PearlCard
            ref={r4}
            className='reveal-block reveal-delay-1 relative p-8 md:p-10'
            shimmerColor='rgba(139,170,122,0.4)'
            background='linear-gradient(145deg, #f0f5ee 0%, #e8f0e5 55%, #dce9d8 100%)'
            border='1px solid rgba(139,170,122,0.35)'
            boxShadow='0 1px 0 rgba(255,255,255,0.9) inset, 0 8px 32px rgba(36,61,30,0.05)'
            borderRadius='24px'
          >
            {/* Corner botanical */}
            <div className='absolute top-0 right-0 opacity-50' aria-hidden='true'>
              <EucalyptusBranch width={70} height={90} flip style={{ display: 'block' }} />
            </div>
            <FormFieldLabel
              letterSpacing='0.42em'
              color='var(--green)'
              opacity={0.55}
              className='mb-5'
            >
              {'Для джентльменов'}
            </FormFieldLabel>
            <h3
              className='font-serif leading-tight mb-4'
              style={{
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                fontWeight: 300,
                color: 'var(--ink)',
                letterSpacing: '-0.02em',
              }}
            >
              {'Классический костюм и жилетка'}
            </h3>
            <p
              className='font-sans leading-relaxed mb-6'
              style={{
                fontSize: '13px',
                fontWeight: 300,
                color: 'var(--ink)',
                opacity: 0.45,
                maxWidth: '22rem',
              }}
            >
              {'Костюм со светлой рубашкой в оттенках палитры. Галстук или платок в тон.'}
            </p>
            <div
              className='inline-flex items-center gap-2 px-4 py-2 rounded-full'
              style={{
                background: 'rgba(36,61,30,0.07)',
                border: '1px solid rgba(139,170,122,0.45)',
              }}
            >
              <svg width='10' height='10' viewBox='0 0 10 10' fill='none' aria-hidden='true'>
                <path
                  d='M1.5 5.5l2.5 2.5 5-5'
                  stroke='var(--green)'
                  strokeWidth='1.2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <span
                className='font-sans'
                style={{ fontSize: '10px', fontWeight: 400, color: 'var(--green)', opacity: 0.7 }}
              >
                {'Натуральные оттенки'}
              </span>
            </div>
          </PearlCard>
        </div>

        {/* Closing note */}
        <div className='text-center'>
          <p
            className='font-serif'
            style={{
              fontSize: 'clamp(1.1rem, 2.8vw, 1.6rem)',
              fontWeight: 300,
              color: 'var(--ink)',
              opacity: 0.3,
              letterSpacing: '-0.01em',
            }}
          >
            {'Мы будем рады разделить с вами радость нашего дня'}
          </p>
        </div>
      </div>
    </section>
  );
}
