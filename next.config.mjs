
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

/** @type {import("next").NextConfig} */

const config = {
  reactStrictMode: false,
};

export default config;
