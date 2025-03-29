
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Premium Shop - Luxury Products',
  description: 'Discover our collection of premium products designed for modern living',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} antialiased text-gray-900`}>
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
