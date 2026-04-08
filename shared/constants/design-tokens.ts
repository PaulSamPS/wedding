/**
 * Shared design tokens for the wedding site.
 *
 * These constants consolidate repeated rgba gradients, borders,
 * and shadow values used across section components.
 */

/* ─── Sage green colour family ─────────────────────────────────── */
export const SAGE = {
  50: 'rgba(195,212,187,0.15)',
  200: 'rgba(195,212,187,0.35)',
  300: 'rgba(195,212,187,0.45)',
  400: 'rgba(195,212,187,0.50)',
  500: 'rgba(195,212,187,0.60)',
  600: 'rgba(195,212,187,0.70)',
  800: 'rgba(195,212,187,0.85)',
  900: 'rgba(195,212,187,0.90)',
  GLOW: 'rgba(195,212,187,0.15)',
} as const;

/* ─── Pre-built gradients ──────────────────────────────────────── */
export const GRADIENTS = {
  CARD_LIGHT: 'linear-gradient(145deg, #ffffff, #f7f6f4)',
  CARD_WARM: 'linear-gradient(145deg, #ffffff 0%, #f8f6f2 55%, #f2ede7 100%)',
  CARD_SAGE: 'linear-gradient(145deg, #f0f5ee 0%, #e8f0e5 55%, #dce9d8 100%)',
  PEARL: 'linear-gradient(135deg, #fff 20%, rgba(195,212,187,0.5))',
  FADE_DOWN: 'linear-gradient(to bottom, rgba(195,212,187,0.6), transparent)',
  SHIMMER_SAGE:
    'linear-gradient(90deg, transparent, rgba(255,255,255,0.9) 40%, rgba(195,212,187,0.5) 60%, transparent)',
  SHIMMER_WARM:
    'linear-gradient(90deg, transparent, rgba(255,255,255,0.9) 40%, rgba(212,184,150,0.4) 60%, transparent)',
} as const;

/* ─── Reusable shadows ─────────────────────────────────────────── */
export const SHADOWS = {
  CARD: '0 1px 0 rgba(255,255,255,0.9) inset, 0 8px 32px rgba(36,61,30,0.04)',
  CARD_LARGE: '0 1px 0 rgba(255,255,255,0.9) inset, 0 16px 48px rgba(36,61,30,0.05)',
} as const;
