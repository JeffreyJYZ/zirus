import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    experimental: {
        authInterrupts: true,
    },
    output: "standalone",
};

const withMDX = createMDX();

export default withMDX(nextConfig);
