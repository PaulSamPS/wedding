'use client';

import { EucalyptusBranch, SectionLabel, PearlDivider } from '@/components/botanical';
import { SectionWatermark } from '@/shared/ui/section-watermark';
import { PearlDot } from '@/shared/ui/pearl-dot';
import { useReveal } from '@/shared/hooks/use-reveal';
import Image from 'next/image';

export default function StorySection() {
  const r1 = useReveal();
  const r2 = useReveal(80);
  const r3 = useReveal(160);

  return (
    <section
      id='story'
      className='relative py-15 md:py-35 px-6 overflow-hidden'
      style={{ background: '#fff' }}
    >
      <SectionWatermark />
      <div className='max-w-6xl mx-auto'>
        {/* Label */}
        <div ref={r1} className='reveal-block mb-15 md:mb-23' style={{ color: 'var(--green)' }}>
          <SectionLabel number='01' text='Наша история' />
        </div>

        <div className='grid md:grid-cols-2 items-start gap-15'>
          {/* Pearl card — dark */}
          <div ref={r2} className='reveal-block order-1'>
            <div className='relative w-full rounded-xl overflow-hidden flex flex-col justify-between shadow-sm'>
              {/* Pearl shimmer top edge */}
              <Image
                src='photo.jpg'
                alt='photo'
                width={300}
                height={500}
                style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Text */}
          <div ref={r3} className='reveal-block reveal-delay-2 order-2 flex flex-col gap-8'>
            {/* Small botanical accent */}
            <div className='flex items-start gap-4'>
              {/*<EucalyptusBranch*/}
              {/*  width={40}*/}
              {/*  height={52}*/}
              {/*  opacity={0.2}*/}
              {/*  style={{ display: 'block', flexShrink: 0, marginTop: 4 }}*/}
              {/*/>*/}
              <blockquote
                className='font-serif text-balance leading-[1.12]'
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontWeight: 300,
                  letterSpacing: '-0.025em',
                  color: 'var(--green)',
                  fontFamily: 'var(--font-florisel)',
                }}
              >
                {'«Все случается в нужный момент и в нужное время»'}
              </blockquote>
            </div>

            <div className='flex items-center gap-4'>
              <div
                className='w-8 h-px'
                style={{ background: 'var(--green-sage)' }}
                aria-hidden='true'
              />
              <span
                className='font-sans'
                style={{
                  fontSize: '9px',
                  fontWeight: 500,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'var(--green)',
                  opacity: 0.55,
                }}
              >
                {'Павел & Екатерина'}
              </span>
            </div>

            <p
              className='font-sans leading-relaxed text-base'
              style={{
                fontWeight: 300,
                color: 'var(--ink)',
                opacity: 0.48,
                maxWidth: '26rem',
              }}
            >
              {
                'Мы встретились 5 лет назад и с того момента пишем нашу историю Любви. В день, когда мы откроем новую главу, очень хотим, чтобы рядом с нами были именно вы - наша Семья и наши Друзья!'
              }
            </p>

            {/* Pearl detail row */}
            {/*<div className='flex items-center gap-3' aria-hidden='true'>*/}
            {/*  {[0, 1, 2, 3, 4].map((i) => (*/}
            {/*    <PearlDot key={i} size={i === 2 ? 8 : 5} opacity={i === 2 ? 0.8 : 0.4} />*/}
            {/*  ))}*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </section>
  );
}
