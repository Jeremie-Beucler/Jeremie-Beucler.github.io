import React from 'react';

import type { Metadata } from 'next';
import { Raleway, Source_Sans_3 } from 'next/font/google';

import GoogleAnalytics from '@/components/Template/GoogleAnalytics';
import Navigation from '@/components/Template/Navigation';
import '@/static/css/main.scss';

const sourceSans = Source_Sans_3({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

const raleway = Raleway({
  weight: ['400', '800', '900'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Jérémie Beucler',
    template: '%s | Jérémie Beucler',
  },
  description: "Jérémie Beucler's personal website. Cognitive scientist.",
  keywords: ['Jérémie Beucler', 'cognitive science', 'reasoning'],
  authors: [{ name: 'Jérémie Beucler' }],
  creator: 'Jérémie Beucler',
  metadataBase: new URL('https://github.com/Jeremie-Beucler/jeremiebeucler.github.io'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://github.com/Jeremie-Beucler/jeremiebeucler.github.io',
    siteName: 'Jérémie Beucler',
    title: 'Jérémie Beucler',
    description: 'Cognitive scientist',
    images: [
      {
        url: '/images/me.jpg',
        width: 1200,
        height: 630,
        alt: 'Jérémie Beucler',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [], // explicitly set to empty
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${raleway.variable}`}>
      <body>
        <div id="wrapper">
          <Navigation />
          {children}
        </div>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
