module.exports = {
  root: true,
  extends: [
    "next/core-web-vitals", // Base Next.js rules
    "plugin:prettier/recommended", // Prettier integration
  ],
  plugins: ["@typescript-eslint", "tailwindcss"],
  rules: {
    // Add your own tweaks here
  },
};
