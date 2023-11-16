import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/Footer/Footer'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Website',
  description: 'SPA with next.js 14',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={urbanist.className}>{children}</body>
      <Footer/>
    </html>
  )
}
