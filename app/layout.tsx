import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bizzie - Transform Your Business',
  description: 'Take control of your financial health with Bizzie, the ultimate profit coach for home-service businesses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
