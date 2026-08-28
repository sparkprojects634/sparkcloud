import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'sparkcloud.in' },
      { protocol: 'https', hostname: 'admin.sparkcloud.in' },
    ],
  },
}

export default nextConfig