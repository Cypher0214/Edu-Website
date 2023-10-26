// // Import the modules you need
// import FlowbitePlugin from 'flowbite/plugin';
// import DaisyUI from 'daisyui';

// Export your configuration object
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]
  // daisyui: {
  //   themes: ["light", "dark", "cupcake"],
  // },

};
