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
      },
      fontFamily: {
        "GrotThin": ["GrotThin"],
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
  plugins: [],
}