/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Configure next/image to use the website returned by the GraphQL API:
    domains: ["img.pokemondb.net"],
  },
  async rewrites() {
    return [
      {
        // Show Pokémon #1 (Bulbasaur) on the homepage route / using rewrites:
        source: "/",
        destination: "/1",
      },
    ]
  },
}

module.exports = nextConfig
