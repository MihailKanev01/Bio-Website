/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enables static export
    basePath: "/Bio-Website", // Must match your GitHub repo name
    images: { unoptimized: true }, // Fix images in static export
  };
  
  export default nextConfig;
  