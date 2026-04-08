'use client';

import { useEffect, useState } from 'react';

export function GuestCount() {
  const [count, setCount] = useState({ guests: 0, children: 0 });

  useEffect(() => {
    fetch('/api/guest-count')
      .then((res) => res.json())
      .then(setCount);
  }, []);

  return (
    <p
      className='font-sans'
      style={{
        fontSize: '9px',
        fontWeight: 600,
        letterSpacing: '0.38em',
        textTransform: 'uppercase',
        color: 'var(--ink)',
        opacity: 0.2,
      }}
    >
      {`${count.guests} / ${count.children}`}
    </p>
  );
}
