import { PearlDot } from '@/shared/ui/pearl-dot';

const ITEMS = ['Павел & Екатерина', '08 · 07 · 2026', 'Дача, Моншер', 'Церемония 15:00'];

export default function MarqueeTicker() {
  const all = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div
      className='overflow-hidden py-4 select-none'
      style={{
        borderTop: '1px solid rgba(138, 170, 122, 0.3)',
        borderBottom: '1px solid rgba(138, 170, 122, 0.3)',
        // background: "linear-gradient(to right, #fafaf9, #f5f4f1 40%, #fafaf9)",
        background: '#fbfbfa',
      }}
      aria-hidden='true'
    >
      <div className='marquee-track'>
        {all.map((item, i) => (
          <span key={i} className='inline-flex items-center gap-6 px-6'>
            <span
              className='text-primary whitespace-nowrap'
              style={{
                fontSize: '8.5px',
                fontWeight: 500,
                letterSpacing: '0.42em',
                textTransform: 'uppercase',
                // color: 'var(--ink)',
                opacity: 0.3,
              }}
            >
              {item}
            </span>
            <PearlDot size={5} borderOpacity={0.7} />
          </span>
        ))}
      </div>
    </div>
  );
}
