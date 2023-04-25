import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        100: "100vh",
      },
    },
  },
  plugins: [],
} satisfies Config;
