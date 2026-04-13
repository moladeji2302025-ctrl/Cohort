import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(to right, #0082E6, #2B6BE2, #4E49E0, #6339D9, #7B28CF)",
      },
    },
  },
};

export default config;
