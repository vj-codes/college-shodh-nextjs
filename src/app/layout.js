import Header from '@/components/header/Header';
import './globals.css';
import Footer from '@/components/footer/Footer';
import { SearchProvider } from '@/context/SearchContext';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SearchProvider>
          <Header />
          {children}
          <Footer />
        </SearchProvider>
      </body>
    </html>
  )
}
