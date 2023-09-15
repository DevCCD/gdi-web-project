/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.geojson$/,
      use: ['json-loader'],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/nosotros',
        destination: "/nosotros/quienes-somos",
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
