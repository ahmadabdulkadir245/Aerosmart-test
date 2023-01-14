/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "istockphoto.com",
      "unsplash.com",
      "links.papareact.com",
      "unsplash.com/",
      "image.tmdb.org",
      "lh3.googleusercontent.com",
    ],
    optimizeFonts: false,
  },
}
module.exports = nextConfig


