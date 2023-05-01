/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "index.html"
  ],
  theme: {
    extend: {
      animation: {
        'button-pulse': 'pulse_color 3s linear infinite',
        'border-pulse': 'pulse_border_color 3s linear infinite',
       },
    },
    keyframes: {
      pulse_color: {
        '0%, 100%': {  
          backgroundColor: 'yellow'
        },
        '50%': { 
          backgroundColor: 'red'
         },
      },

        pulse_border_color: {
        '0%, 100%': {  
          borderColor: 'yellow'
        },
        '50%': { 
          borderColor: 'red'
          },
  

      }
     }
  },
  plugins: [],
}

