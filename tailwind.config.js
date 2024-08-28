/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/src/images/banner.jpg')",
        "linear-color":
          "linear-gradient(180deg, rgba(4,249,59,0) 0%, rgba(159, 24, 227, 0.564) 100%)",
      },
    },
  },
  plugins: [],
};
