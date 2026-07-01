import type { Metadata } from 'next'
import Script from 'next/script'
import { Footer } from '../components/Footer'
import { Nav } from '../components/Nav'
import { cssVersion } from '../data/site'

export const metadata: Metadata = {
  title: 'Revytal',
  description: 'A trusted product path for PT recommendations.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/revytal-dark-logo.svg" type="image/svg+xml" />
        <link rel="preload" href="/assets/fonts/PolySans-Neutral.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/PolySans-Slim.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="stylesheet" href={`/assets/site.css?v=${cssVersion}`} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="page">
          <Nav />
          {children}
          <Footer />
        </div>
        <div className="toast" role="status" aria-live="polite" />
        <Script src={`/assets/site.js?v=${cssVersion}`} strategy="afterInteractive" />
      </body>
    </html>
  )
}
