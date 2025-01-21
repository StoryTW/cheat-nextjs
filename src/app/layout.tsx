import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import '@/assets/styles/index.scss';
import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';
import { Providers } from '@/providers/Providers';

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
      <body className={montserrat.className}>
        <Providers>
          <div className='background'>
            <div className='container'>
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
