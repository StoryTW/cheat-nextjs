import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '@/assets/styles/index.scss';
import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';

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
        <div className='background'>
          <div className='container'>
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
