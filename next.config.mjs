/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_API_URL: "https://api.github.com/users",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
