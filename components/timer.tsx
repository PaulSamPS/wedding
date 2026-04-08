'use client';

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

// 08.07.2026 15:00 UTC+5 = 10:00 UTC
const TARGET_MS = Date.UTC(2026, 6, 8, 10, 0, 0);

export default function Countdown() {
  return (
    <div
      className='countdown-wrapper'
      style={{ position: 'relative', display: 'inline-block', padding: '24px 16px' }}
    >
      {/* Label */}
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '8px',
          fontWeight: 500,
          letterSpacing: '0.45em',
          textTransform: 'uppercase',
          color: 'var(--green)',
          opacity: 0.4,
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        {'До торжества'}
      </p>

      {/* Flip Clock Countdown */}
      <div className='wedding-countdown'>
        <FlipClockCountdown
          to={TARGET_MS}
          labels={['дней', 'часов', 'минут', 'секунд']}
          duration={0.5}
        />
      </div>
    </div>
  );
}
