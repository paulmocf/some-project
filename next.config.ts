import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    basePath: "/some-project",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
};

export default nextConfig;
