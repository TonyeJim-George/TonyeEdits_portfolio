/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      animation: {
        blink: 'blink 1s step-end infinite', // blinking cursor
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
      },
      // Optional for iOS smoother feel
      scrollBehavior: ['smooth'],
    },
  },
  plugins: [],
};
