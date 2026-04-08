'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { EucalyptusBranch, SectionLabel, PearlDivider } from '@/components/botanical';
import { SectionWatermark } from '@/shared/ui/section-watermark';
import { FormFieldLabel } from '@/shared/ui/form-field-label';
import { CounterInput } from '@/shared/ui/counter-input';
import { PearlCard } from '@/shared/ui/pearl-card';
import { useReveal } from '@/shared/hooks/use-reveal';

type Attending = 'yes' | 'no' | null;

const fieldStyle: React.CSSProperties = {
  background: 'linear-gradient(145deg, #ffffff, #f7f6f4)',
  border: '1px solid rgba(195,212,187,0.5)',
  color: 'var(--ink)',
  boxShadow: '0 1px 0 rgba(255,255,255,0.9) inset',
};

export default function RSVPSection() {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState<Attending>(null);
  const [guests, setGuests] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [wishes, setWishes] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!name.trim()) {
      setError('Пожалуйста, введите ваше имя.');
      return;
    }
    if (!attending) {
      setError('Пожалуйста, выберите вариант.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const { error: dbErr } = await createClient()
        .from('rsvp')
        .insert({
          name: name.trim(),
          attending: attending === 'yes',
          guests: attending === 'yes' ? guests : 0,
          children: attending === 'yes' ? childrenCount : 0,
          wishes: wishes.trim() || null,
        });
      if (dbErr) throw dbErr;
      setSubmitted(true);
    } catch {
      setError('Что-то пошло не так. Попробуйте ещё раз.');
    } finally {
      setLoading(false);
    }
  };

  const leftRef = useReveal();
  const rightRef = useReveal(130);

  return (
    <section
      id='rsvp'
      className='relative py-15 md:py-35 px-6 overflow-hidden'
      style={{ background: '#fff' }}
    >
      <SectionWatermark />

      <div className='max-w-6xl mx-auto'>
        <div ref={leftRef} className='reveal-block mb-15 md:mb-23'>
          <SectionLabel number='05' text='Подтверждение' />
        </div>
        <div className='grid md:grid-cols-2 gap-15 md:gap-23 items-start'>
          {/* Left — heading */}
          <div className='flex flex-col'>
            <h2
              className='font-serif text-balance leading-[0.92] mb-15'
              style={{
                fontSize: 'clamp(3rem, 9vw, 6.5rem)',
                fontWeight: 300,
                letterSpacing: '-0.04em',
                color: 'var(--green)',
                fontFamily: 'var(--font-florisel)',
                lineHeight: 1,
              }}
            >
              {'Подтвердите присутствие'}
            </h2>
            <PearlDivider className='mb-7' />

            <p
              className='font-sans leading-relaxed w-full'
              style={{
                fontSize: '13.5px',
                fontWeight: 300,
                color: 'var(--ink)',
                opacity: 0.44,
              }}
            >
              {'Пожалуйста, дайте нам знать до 1 июня 2026, чтобы мы могли всё организовать.'}
            </p>
          </div>
          {/* Right — form */}
          <div ref={rightRef} className='reveal-block reveal-delay-2'>
            {submitted ? (
              <div
                className='flex flex-col items-center gap-7 py-20 text-center rounded-[28px]'
                style={{
                  background: 'linear-gradient(145deg, #fff 0%, #f4f7f2 100%)',
                  border: '1px solid rgba(195,212,187,0.5)',
                  boxShadow: '0 1px 0 rgba(255,255,255,0.9) inset',
                }}
              >
                {/* Pearl check circle */}
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #fff 20%, #edf2ea)',
                    border: '1px solid rgba(195,212,187,0.7)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 0 6px rgba(195,212,187,0.15)',
                  }}
                >
                  <svg width='22' height='22' viewBox='0 0 22 22' fill='none' aria-hidden='true'>
                    <path
                      d='M4 11.5l5 5 9-9'
                      stroke='var(--green)'
                      strokeWidth='1.7'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <p
                  style={{
                    fontSize: 'clamp(2.6rem, 4vw, 3.4rem)',
                    fontWeight: 300,
                    color: 'var(--green)',
                    fontFamily: 'var(--font-florisel)',
                  }}
                >
                  {'Спасибо!'}
                </p>
                <p
                  className='font-sans'
                  style={{ fontSize: '13px', fontWeight: 300, color: 'var(--ink)', opacity: 0.4 }}
                >
                  {attending === 'no'
                    ? 'Очень жаль, что вас не будет'
                    : 'Мы с нетерпением ждём вас'}
                </p>
              </div>
            ) : (
              <PearlCard
                className='p-8 md:p-10 flex flex-col gap-5'
                shimmerColor='rgba(195,212,187,0.5)'
                background='linear-gradient(145deg, #ffffff, #f8f6f2)'
                border='1px solid rgba(195,212,187,0.45)'
                boxShadow='0 1px 0 rgba(255,255,255,0.9) inset, 0 16px 48px rgba(36,61,30,0.05)'
                borderRadius='28px'
              >
                {/* Name */}
                <div>
                  <FormFieldLabel htmlFor='rsvp-name'>{'Ваше имя'}</FormFieldLabel>
                  <input
                    id='rsvp-name'
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={'Имя и фамилия'}
                    className='w-full font-sans rounded-xl px-4 py-3.5 outline-none transition-all duration-200 focus:ring-2 focus:ring-green-700/15 placeholder:opacity-25'
                    style={{ ...fieldStyle, fontSize: '13px' }}
                  />
                </div>

                {/* Attending */}
                <div>
                  <FormFieldLabel className='mb-2.5'>{'Вы придёте?'}</FormFieldLabel>
                  <div className='grid grid-cols-2 gap-2.5'>
                    {(['yes', 'no'] as const).map((val) => (
                      <button
                        key={val}
                        type='button'
                        onClick={() => setAttending(val)}
                        className='py-3 px-4 font-sans rounded-xl transition-all duration-200'
                        style={{
                          fontSize: '11px',
                          fontWeight: 500,
                          letterSpacing: '0.1em',
                          background:
                            attending === val
                              ? 'var(--green-low)'
                              : 'linear-gradient(145deg, #ffffff, #f4f2ee)',
                          color: attending === val ? '#fff' : 'var(--green)',
                          border:
                            attending === val
                              ? '1px solid var(--green-low)'
                              : '1px solid rgba(195,212,187,0.5)',
                          opacity: attending !== null && attending !== val ? 0.45 : 1,
                          boxShadow:
                            attending === val ? 'none' : '0 1px 0 rgba(255,255,255,0.9) inset',
                        }}
                      >
                        {val === 'yes' ? 'Приду' : 'Не смогу'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Guest count */}
                {attending === 'yes' && (
                  <div>
                    <FormFieldLabel className='mb-2.5'>{'Количество гостей'}</FormFieldLabel>
                    <CounterInput
                      value={guests}
                      onChange={(v) => setGuests(v)}
                      min={1}
                      max={10}
                      ariaDecrementLabel='Уменьшить'
                      ariaIncrementLabel='Увеличить'
                    />
                  </div>
                )}

                {/* Children count */}
                {attending === 'yes' && (
                  <div>
                    <FormFieldLabel className='mb-2.5'>{'Количество детей'}</FormFieldLabel>
                    <CounterInput
                      value={childrenCount}
                      onChange={(v) => setChildrenCount(v)}
                      min={0}
                      max={10}
                      ariaDecrementLabel='Уменьшить количество детей'
                      ariaIncrementLabel='Увеличить количество детей'
                    />
                  </div>
                )}

                {/* Wishes */}
                {/*<div>*/}
                {/*  <FormFieldLabel htmlFor='rsvp-wishes'>{'Пожелания или аллергии'}</FormFieldLabel>*/}
                {/*  <textarea*/}
                {/*    id='rsvp-wishes'*/}
                {/*    rows={3}*/}
                {/*    value={wishes}*/}
                {/*    onChange={(e) => setWishes(e.target.value)}*/}
                {/*    placeholder={'Напишите, если хотите...'}*/}
                {/*    className='w-full font-sans rounded-xl px-4 py-3.5 outline-none resize-none transition-all duration-200 focus:ring-2 focus:ring-green-700/15 placeholder:opacity-25 leading-relaxed'*/}
                {/*    style={{ ...fieldStyle, fontSize: '13px' }}*/}
                {/*  />*/}
                {/*</div>*/}

                {error && (
                  <p className='font-sans text-[12px]' style={{ color: '#b85c4e' }}>
                    {error}
                  </p>
                )}

                <button
                  type='button'
                  onClick={handleSubmit}
                  disabled={loading}
                  className='w-full font-sans rounded-xl transition-all duration-200 disabled:opacity-40 hover:opacity-80 mt-1'
                  style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.24em',
                    textTransform: 'uppercase',
                    padding: '15px',
                    background: 'var(--green-low)',
                    color: '#fff',
                  }}
                >
                  {loading ? 'Отправка...' : 'Подтвердить'}
                </button>
              </PearlCard>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
