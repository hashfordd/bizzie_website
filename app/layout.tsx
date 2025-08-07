import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from './components/theme-provider'

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
