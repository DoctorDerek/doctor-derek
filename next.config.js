/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Configure next/image to use the website returned by the GraphQL API:
    domains: ["img.pokemondb.net"],
  },
}

module.exports = nextConfig
