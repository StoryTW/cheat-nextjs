import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import '@/assets/styles/index.scss';
import { Header } from '@/layout/Header';
import { Providers } from '@/providers/Providers';
import { Footer } from '@/layout/Footer';
import clsx from 'clsx';

const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  style: ['normal'],
  preload: true,
});

export const metadata: Metadata = {
  title: 'Cheat',
  description: 'Cheat',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body className={clsx(montserrat.className, 'splat-toggle')}>
        <Providers>
          <div className='container'>
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
