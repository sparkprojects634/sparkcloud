import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'sparkcloud.in' },
      { protocol: 'https', hostname: 'console.sparkcloud.in' },
    ],
  },
}

export default nextConfig