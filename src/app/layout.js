import Header from '@/components/header/Header';
import './globals.css';
import Footer from '@/components/footer/Footer';
import { SearchProvider } from '@/context/SearchContext';
import { CollegeProvider } from '@/context/CollegContext';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: 'College-Shodh',
  description: 'Discover India`s top Science and Engineering colleges with CollegeShodh – a trusted platform providing authentic verified insights to help students and parents make informed decisions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SearchProvider>
          <CollegeProvider>
          <Header />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
          </CollegeProvider>
        </SearchProvider>
      </body>
    </html>
  )
}
