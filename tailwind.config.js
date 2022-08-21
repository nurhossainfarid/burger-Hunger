/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "red",
          secondary: "yellow",
          accent: "#3A4256",
          neutral: "#e5e7eb",
          "base-100": "#ffffff",
        },
      },
      "white",
      "cupcake",
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  plugins: [require("daisyui")],
}
