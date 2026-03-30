import path from "path";
import type { NextConfig } from "next";

/** Keeps serverless file tracing scoped to this app when a parent folder has its own lockfile. */
const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
