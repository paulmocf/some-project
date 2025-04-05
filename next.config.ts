import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    basePath: "/bey0nd-digital",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
};

export default nextConfig;
