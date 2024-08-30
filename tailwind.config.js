/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom': '24px 24px 100px 24px',
        'custom-large': '24px, 24px, 200px, 24px',
      },
      colors: {
        "purple": "hsl(259, 100%, 65%)",
        "light-red": "hsl(0, 100%, 67%)",
        "white": "hsl(0, 0%, 100%)",
        "off-white": "hsl(0, 0%, 94%)",
        "light-grey": "hsl(0, 0%, 86%)",
        "smokey-grey": "hsl(0, 1%, 44%)",
        "off-black": "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}

