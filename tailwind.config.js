/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        paintItColor: "#73cdd7",
        themeLight: "#7de7eb",
        themeDark: "#0494C4",
        themeDarker: "#3A5BA0",
        themeDarkest: "#1F4690",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "quote-bg-dark": "url('/bg/quote-bg.png')",
        "quote-bg-light": "url('/bg/quote-bg-light.png')",
        "hero-dark": "url('/bg/hero-bg-dark.jpg')",
        "hero-light": "url('/bg/hero-bg-light.jpg')",
        header: "url('/bg/header-bg.jpg')",
        banner: "url('/bg/banner-bg.jpg')",
        slide1: "url('/slider/hero/hero-slider-1.jpg')",
        slide2: "url('/slider/hero/hero-slider-2.jpg')",
        slide3: "url('/slider/hero/hero-slider-3.jpg')",
        "brush-bg": "url('/bg/brush-bg.jpg')",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "200% 100%",
      },
      animation: {
        spin: "spin 6s linear infinite",
        button: "rotate 0.5s ease ",
        rotate: "rotate 2s linear infinite",
        beat: "beat 1.5s ease-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        pulse: "pulse 3s linear 10s infinite",
        blob: "blob 7s infinite",
        appear: "lefty 1s ease",
        show: "show 10s ease-in",
        youtube: "youtube 2.5s linear 0.5s infinite",
        scroll: "scroll 5s linear 1s infinite",
        slider: "slider 6s ease",
        "slider-top-text": "slider-top-text 2s ease-in-out",
        "slider-bottom-text": "slider-bottom-text 2s ease-in-out",
      },
      keyframes: {
        rotate: {
          "100%": { transform: "rotate(360deg)" },
        },
        beat: {
          "0%, 100%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.2)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-7deg)" },
          "50%": { transform: "rotate(7deg)" },
        },
        pulse: {
          "0% 100%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.5,
          },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        lefty: {
          "0%": {
            transform: "translate(2000px)",
          },
          "100%": {
            transform: "translate(0px)",
          },
        },
        show: {
          "0%%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0.5,
          },
        },
        youtube: {
          "0%": {
            scale: "120%",
            opacity: 0.7,
          },
          "50%": {
            scale: "130%",
            opacity: 0.6,
          },
          "60%": {
            scale: "140%",
            opacity: 0.5,
          },
          "70%": {
            scale: "150%",
            opacity: 0.4,
          },
          "80%": {
            scale: "160%",
            opacity: 0.3,
          },
          "90%": {
            scale: "170%",
            opacity: 0.2,
          },
          "100%": {
            scale: "180%",
            opacity: 0.1,
          },
        },
        scroll: {
          " 0%": {
            transform: "translate(0, 0)",
          },
          "100%": {
            transform: "translate(-200%, 0%)",
          },
        },
        slider: {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1.2)",
          },
        },

        "slider-top-text": {
          "0%": {
            opacity: 0,
            transform: "translate(0,-50px)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0,0px)",
          },
        },
        "slider-bottom-text": {
          "0%": {
            opacity: 0,
            transform: "translate(0,50px)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0,0px)",
          },
        },
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
