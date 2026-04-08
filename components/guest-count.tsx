'use client';

import { createClient } from '@/lib/supabase/client';
import { useEffect, useState } from 'react';

export function GuestCount() {
  const [count, setCount] = useState({ guests: 0, children: 0 });

  useEffect(() => {
    const supabase = createClient();
    supabase
      .from('rsvp')
      .select('guests, children')
      .eq('attending', true)
      .then(({ data }) => {
        const guests = data?.reduce((sum, r) => sum + (r.guests ?? 0), 0) ?? 0;
        const children = data?.reduce((sum, r) => sum + (r.children ?? 0), 0) ?? 0;
        setCount({ guests, children });
      });
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
