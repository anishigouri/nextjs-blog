import { LandingPage } from '@/templates/landing-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site.set',
  description: 'Venda seus produtos como afiliado em um único lugar',
  robots: 'index, follow',
  openGraph: {
    title: 'Site.set',
    description: 'Venda seus produtos como afiliado em um único lugar',
    url: 'https://site.set',
    siteName: 'Site.set',
    locale: 'pt-BR',
    type: 'website',
    images: [
      { url: 'https://site.set/og-image.png', width: 800, height: 600, alt: 'Site.set' },
    ],
  },
};

export default function HomePage() {
  return (
    <LandingPage />
  );
}