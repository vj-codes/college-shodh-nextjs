/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "type": "typing 4s infinite, cursor 0.8s step-end infinite alternate",
      },
      keyframes: {
        typing: {
          "from": { width: "0" },
          "to": { width: "100%" },
        },
        cursor: {
          "50%": { borderColor: "transparent" },
        },
      },
    },
  },
  plugins: [],
};
