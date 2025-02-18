/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enables static export
    basePath: "/your-repo-name", // Replace with your GitHub repo name
    images: { unoptimized: true }, // Fix images in static export
  };
  
  module.exports = nextConfig;
  