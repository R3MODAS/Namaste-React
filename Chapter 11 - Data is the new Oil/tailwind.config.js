/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "customblack-1" : "rgba(2, 6, 12, 0.75)",
        "customblack-2" : "rgba(2, 6, 12, 0.6)",
        "customblack-3" : "#3e4152",
        "customblack-4" : "rgba(40,44,63,.45)"
      }
    },
    fontFamily : {
      "GrotThin" : ["Grotesque Pro Thin"],
      "GrotReg" : ["Grotesque Pro Reg"],
      "GrotMed" : ["Grotesque Pro Med"],
      "GrotBold": ["Grotesque Pro Bold"],
      "GrotBlack": ["Grotesque Pro Black"],
      "ProximaNovaThin": ["ProximaNova Condensed Thin"],
      "ProximaNovaMed": ["ProximaNova Condensed Med"],
      "ProximaNovaSemiBold": ["ProximaNova Condensed SemiBold"],
      "ProximaNovaBold": ["ProximaNova Condensed Bold"],
      "ProximaNovaBlack": ["ProximaNova Condensed Black"],
    }
  },
  plugins: [],
}