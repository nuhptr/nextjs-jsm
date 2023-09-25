import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TSM V2 | Learn Management System',
  description: 'JSM V2 is a Learn Management System for JSM students',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='min-h-screen bg-black-100 font-poppins' suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
