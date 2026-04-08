'use client';

import { EucalyptusBranch, SectionLabel } from '@/components/botanical';
import { SectionWatermark } from '@/shared/ui/section-watermark';
import { PearlDot } from '@/shared/ui/pearl-dot';
import { useReveal } from '@/shared/hooks/use-reveal';

const EVENTS = [
  {
    time: '12:45',
    icon: '◇',
    title: 'ЗАГС',
    desc: 'Церемония в загсе на Пионерская 9',
  },
  {
    time: '14:30',
    icon: '◇',
    title: 'Welcome',
    desc: 'Встреча гостей на площадке празднования',
  },
  { time: '15:00', icon: '◇', title: 'Церемония', desc: 'Торжественная церемония' },
  { time: '15:30', icon: '◇', title: 'Банкет', desc: 'Начало банкета' },
  { time: '20:00', icon: '◇', title: 'Торт & танцы', desc: 'Первый танец, торт, дискотека' },
];

function EventItem({
  ev,
  index,
  isLast,
}: {
  ev: (typeof EVENTS)[number];
  index: number;
  isLast: boolean;
}) {
  const ref = useReveal(index * 90);

  return (
    <li>
      <div ref={ref} className='reveal-block flex gap-0 items-stretch'>
        {/* Time */}
        <div className='w-20 md:w-28 shrink-0 flex items-start justify-end pr-6 pt-1'>
          <span
            className='font-sans tabular-nums'
            style={{
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              color: 'var(--ink)',
              opacity: 0.28,
            }}
          >
            {ev.time}
          </span>
        </div>

        {/* Pearl dot + line */}
        <div className='flex flex-col items-center shrink-0 w-5'>
          <PearlDot size={10} borderOpacity={0.9} withGlow style={{ marginTop: '2px' }} />
          {!isLast && (
            <div
              className='w-px flex-1 mt-1'
              style={{
                background: 'linear-gradient(to bottom, rgba(195,212,187,0.6), transparent)',
              }}
            />
          )}
        </div>

        {/* Content */}
        <div className={`pl-6 ${isLast ? 'pb-0' : 'pb-12'}`}>
          <h3
            className='font-serif mb-1.5'
            style={{
              fontSize: 'clamp(1.15rem, 2.6vw, 1.5rem)',
              fontWeight: 300,
              color: 'var(--ink)',
              letterSpacing: '-0.01em',
            }}
          >
            {ev.title}
          </h3>
          <p
            className='font-sans leading-relaxed'
            style={{
              fontSize: '13px',
              fontWeight: 300,
              color: 'var(--ink)',
              opacity: 0.4,
            }}
          >
            {ev.desc}
          </p>
        </div>
      </div>
    </li>
  );
}

export default function ProgramSection() {
  const headRef = useReveal();

  return (
    <section
      id='program'
      className='relative py-15 md:py-35 px-6 overflow-hidden'
      style={{ background: 'var(--off-white)' }}
    >
      <SectionWatermark />

      <div className='max-w-5xl mx-auto'>
        {/* Header */}
        <div ref={headRef} className='reveal-block mb-15 md:mb-23'>
          <SectionLabel number='02' text='День свадьбы' />
        </div>

        <h2
          className='text-balance leading-[0.92] mb-15 md:mb-23'
          style={{
            fontSize: 'clamp(3.2rem, 9vw, 6rem)',
            fontWeight: 300,
            letterSpacing: '-0.04em',
            color: 'var(--green)',
            fontFamily: 'var(--font-florisel)',
          }}
        >
          {'Программа\nдня'}
        </h2>

        {/* Timeline */}
        <ol className='relative flex flex-col'>
          {EVENTS.map((ev, i) => (
            <EventItem key={ev.time} ev={ev} index={i} isLast={i === EVENTS.length - 1} />
          ))}
        </ol>
      </div>
    </section>
  );
}
