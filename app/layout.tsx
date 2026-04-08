import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond } from 'next/font/google';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-serif',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
});
const sfPro = localFont({
  src: [
    { path: '../fonts/SF-Pro-Display-Light.otf', weight: '300', style: 'normal' },
    { path: '../fonts/SF-Pro-Display-Regular.otf', weight: '400', style: 'normal' },
    { path: '../fonts/SF-Pro-Display-Medium.otf', weight: '500', style: 'normal' },
    { path: '../fonts/SF-Pro-Display-Semibold.otf', weight: '600', style: 'normal' },
    { path: '../fonts/SF-Pro-Display-Bold.otf', weight: '700', style: 'normal' },
  ],
  variable: '--font-sf-pro',
  display: 'swap',
});
const florisel = localFont({
  src: '../fonts/Floriselscript.ttf',
  variable: '--font-florisel',
  display: 'swap',
  weight: '400',
});
const transforma = localFont({
  src: '../fonts/TransformaScript_Trial-Regular.ttf',
  variable: '--font-transforma',
  display: 'swap',
  weight: '400',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: 'Павел & Екатерина — Свадебное приглашение',
  description: 'Вы приглашены на свадьбу Павла и Екатерины, 8 июля 2026 года.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body
        className={`${cormorant.variable} ${sfPro.variable} ${florisel.variable} ${transforma.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
