import { ThemeProvider } from '@/components/providers/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ConvexProvider } from '@/components/providers/convex-provider'
import { Toaster } from 'sonner'
import { ModalProvider } from '@/components/providers/modal-provider'
import { EdgeStoreProvider } from '@/lib/edgestore'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/next.svg',
        href: '/next.svg'
      },
      { media: '(prefers-color-scheme: dark)', url: '/vercel.svg', href: '/vercel.svg' }
    ]
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ConvexProvider>
          <EdgeStoreProvider>
            <ThemeProvider
              attribute='class'
              defaultTheme='system'
              enableColorScheme
              disableTransitionOnChange
              storageKey='theme'
            >
              <Toaster position='bottom-center' />
              <ModalProvider></ModalProvider>
              {children}
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexProvider>
      </body>
    </html>
  )
}
