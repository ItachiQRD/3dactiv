import './globals.css'
import { Inter } from 'next/font/google'
import DynamicMetadata from '../components/DynamicMetadata'
import FaviconManager from '../components/FaviconManager'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '3DACTIV - Recrutement dans l\'Industrie Énergétique',
  description: 'Cabinet de recrutement spécialisé dans l\'industrie énergétique : gaz, nucléaire et renouvelable. Découvrez nos opportunités de carrière.',
  keywords: 'recrutement, énergie, gaz, nucléaire, renouvelable, emploi, carrière',
  authors: [{ name: '3DACTIV' }],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <DynamicMetadata 
          title="3DACTIV - Recrutement dans l'Industrie Énergétique"
          description="Cabinet de recrutement spécialisé dans l'industrie énergétique : gaz, nucléaire et renouvelable. Découvrez nos opportunités de carrière."
          keywords="recrutement, énergie, gaz, nucléaire, renouvelable, emploi, carrière"
          authors={[{ name: '3DACTIV' }]}
        />
        <FaviconManager />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
