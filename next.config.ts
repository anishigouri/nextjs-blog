import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { withContentlayer } from 'next-contentlayer2'

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: projectRoot,
  },
};

export default withContentlayer(nextConfig);
