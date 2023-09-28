import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TSM V2 | Learn Management System',
  description: 'JSM V2 is a Learn Management System for JSM students',
  other: {
    'theme-color': '#0d1117',
    'color-scheme': 'dark only',
    'twitter:card': 'summary_large_image',
    'twitter:image': 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
    'og:url': 'https://nextjs-tsm.vercel.app/',
    'og:image': 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
    'og:type': 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body
        className='min-h-screen bg-black-100 font-poppins no-scrollbar'
        suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
