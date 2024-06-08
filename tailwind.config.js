/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroSection' : "url('/src/assest/header2.jpg')"
        // 'heroSection' : "url('https://img.freepik.com/free-vector/circuits-blue-red-gradient-digital-background_23-2148821701.jpg?w=1380&t=st=1717793837~exp=1717794437~hmac=c6f00d2625a24ecfe8baf1be2775d4f7885b2303fca92435757c2f5fe11baa96')"
      }
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
