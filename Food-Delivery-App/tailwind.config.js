/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-1': '#282c3f',
        'color-2':'#fc8019',
        'color-3':'rgba(2, 6, 12, 0.75)',
        'color-4':'rgba(2, 6, 12, 0.6)',
        'color-5':'#93959f',
        'color-6':'#535665'
      },
      fontFamily: {
        "GrotThin": ["Grot Thin"],
        "GrotReg": ["Grot Reg"],
        "GrotMed": ["Grot Med"],
        "GrotBold": ["Grot Bold"],
        "GrotBlack": ["Grot Black"],
        "ProximaNovaThin": ["Proxi Thin"],
        "ProximaNovaMed": ["Proxi Med"],
        "ProximaNovaSemiBold": ["Proxi Semi"],
        "ProximaNovaBold": ["Proxi Bold"],
        "ProximaNovaBlack": ["Proxi Black"],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}