/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"
  ],
  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#D97CFF',
          100: '#D26CFF',
          200: '#CC5CFF',
          300: '#C54CFC',
          400: '#BE3DF9',
          500: '#B72FF5',
          600: '#9C34CC',
          700: '#8236A5',
          800: '#62267E',
          900: '#4C2260'
        },
      }
    },
  },
  plugins: [],
}

