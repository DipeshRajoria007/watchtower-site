import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Watchtower',
    short_name: 'Watchtower',
    description:
      'Slack-native developer workflows with visible control, traceable execution, and local operator ownership.',
    start_url: '/',
    display: 'standalone',
    background_color: '#081012',
    theme_color: '#0b1011',
    icons: [
      {
        src: '/watchtower-mark.svg',
        sizes: '160x160',
        type: 'image/svg+xml',
      },
    ],
  }
}
