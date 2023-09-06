import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lux Rentals',
  description: 'Parallax Homepage template',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover'
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="cinzel bg-black">{children}</body>
    </html>
  )
}
