/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Forzar el uso del compilador web estándar compatible con Hostinger
  swcMinify: false,

  // 2. Mantener la exportación aislada que requiere el software
  output: "standalone",

  // 3. Mantener los accesos de desarrollo permitidos por WaCRM
  allowedDevOrigins: [
    "*.ngrok-free.app",
    "*.ngrok.app",
    "*.ngrok.io",
    "*.trycloudflare.com",
    "*.loca.lt",
    ...(process.env.ALLOWED_DEV_ORIGINS
      ? process.env.ALLOWED_DEV_ORIGINS.split(",")
          .map((origin) => origin.trim())
          .filter(Boolean)
      : []),
  ],
};

export default nextConfig;
