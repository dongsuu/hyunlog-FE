/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    const isDev = process.env.NODE_ENV === "development";
    const API_DOMAIN = isDev ? process.env["NEXT_PUBLIC_API_URL"] : "";
    return [
      {
        source: "/",
        destination: `${API_DOMAIN}`,
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
