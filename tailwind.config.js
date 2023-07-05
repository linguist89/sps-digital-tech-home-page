module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'landing-page': '#291A3E',
        'landing-page-darker': '#35254A',
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['responsive', 'hover', 'focus', 'active'],
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
      textColor: ['responsive', 'hover', 'focus', 'active'],
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
