/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'kp': {
          black: '#0a0a0a',
          green: '#1a7f37',
          'green-dark': '#0f5c28',
          'green-light': '#22a04a',
          gold: '#e5b318',
          'gold-light': '#facc15',
        },
      },
    },
  },
  plugins: [],
};
