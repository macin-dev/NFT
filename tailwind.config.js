/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-element-disable": "#E3E3E3",
        "light-element-tertiary": "#A4A4A4",
        "light-element-secondary": "#6A6A6A",
        "light-element-primary": "#252525",
        "light-element-primary-btn": "#040404",
        "light-surface-blue": "#EFF2FF",
        "light-surface-green": "#F4FFFB",
        "light-surface-purple": "#F7F4FF",
        "light-surface-secondary-btn": "#F5F5F5",
        "light-border": "#E3E3E3",
        "light-surface-hard": "#929292",
        "light-surface-medium": "#E3E3E3",
        "light-surface-soft": "#F5F5F5",
      },
      width: {
        mobile: "23.4375rem",
        tablet: "60rem",
        desktop: "90rem",
      },
      letterSpacing: {
        default: "-0.0125rem",
      },
    },
    screens: {
      mobile: "375px",
      tablet: "960px",
      desktop: "1440px",
    },
    backgroundImage: {
      "rectangle-login": "url('./assets/rectangle.jpeg')",
    },
  },
  plugins: [],
};
