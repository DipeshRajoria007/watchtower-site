import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const sansFont = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://watchtower-site-xi.vercel.app')

export const metadata: Metadata = {
  metadataBase: siteUrl,
  alternates: { canonical: '/' },
  title: 'Watchtower | Autonomous Engineering Ops With Visible Control',
  description:
    'Watchtower turns Slack requests into visible, governed engineering execution for teams that want autonomy without losing inspection.',
  applicationName: 'Watchtower',
  keywords: [
    'Watchtower',
    'engineering operations',
    'autonomous workflows',
    'Slack automation',
    'developer productivity',
    'SSR landing page',
  ],
  openGraph: {
    title: 'Watchtower',
    description:
      'Slack-native developer workflows with visible control, traceable execution, and local operator ownership.',
    type: 'website',
    siteName: 'Watchtower',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Watchtower',
    description:
      'Autonomous engineering ops with visible control, traceable execution, and Slack-native intake.',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0A0A0B',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sansFont.variable} ${monoFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Watchtower',
              applicationCategory: 'DeveloperApplication',
              operatingSystem: 'macOS',
              description:
                'Watchtower turns Slack mentions into autonomous engineering workflows running on your local machine. PR reviews, bug fixes, operator commands — all observable from a desktop dashboard.',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              url: siteUrl.toString(),
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
