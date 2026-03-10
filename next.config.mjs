/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co", pathname: "/**" },
    ],
  },
  // Agentation is loaded only on the client via AgentationLoader (dynamic, ssr: false).
  async redirects() {
    return [
      { source: "/work", destination: "/", permanent: true },
      { source: "/contact", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
