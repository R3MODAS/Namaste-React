/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        'color-1': '#1C1B1F',
        'color-2': '#00C874'
      }
    },
    fontFamily: {
      "SfProRef": ["Sf Pro Reg"],
      "SfProMed": ["Sf Pro Med"],
      "SfProBold": ["Sf Pro Bold"],
      "SfCompactRef": ["Sf Compact Reg"],
      "SfCompactMed": ["Sf Compact Med"],
      "SfCompactSemi": ["Sf Compact SemiBold"],
      "SfCompactBold": ["Sf Compact Bold"],
    }
  },
  plugins: [require("tailwindcss-animate")],
}