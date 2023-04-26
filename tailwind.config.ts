import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: "class",
  theme: {
    extend: {
      height: {
        100: "100vh",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "spin-slow-reverse": "spin 20s linear infinite reverse",
        "move-and-spin": "moveAndSpin 20s linear infinite",
      },
      keyframes: {
        spin: {
          from: {
            transform: "translateX(-200px) rotate(0deg)",
          },
          to: {
            transform: "translateX(-200px) rotate(360deg)",
          },
        },
        moveAndSpin: {
          from: {
            transform: "translateX(200px) rotate(0deg)",
          },
          to: {
            transform: "translateX(200px) rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
