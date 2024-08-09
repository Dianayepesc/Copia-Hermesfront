/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-blue': '#00324D',
        'custom-blues': '#39A900',
        'sena-red': '#dc2626',
        'narvy-blue': 'rgba(0, 95, 139, 0.5)',
        'darkBlue' : '#00314D',
        'Rblue': '#00314D',
        'Rblue-Trs': 'rgba(0, 49, 77, 0.4)',
        'green' : '#39A906',
      },
    },
  },
  plugins: [],
};
