/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // SEO Roadmap canonicalizes the hub at /communities. Anything bookmarked
      // at /neighborhoods/* should land on the equivalent /communities/* page.
      { source: "/neighborhoods", destination: "/communities", permanent: true },
      { source: "/neighborhoods/:slug", destination: "/communities/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
