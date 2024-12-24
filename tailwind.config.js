/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        Container: '1600px',
      },
      colors: {
        OxfordBlue: '#1D293F',
        SeaGreen: '#28B0A6',
        AntiqWhite: '#FEF2DE',
        Orange: '#F5A623',
        Pink1: '#F9C7D2',
        Pink2: '#EE5879',
        Grey: '#99A3AD',
        Grey2: '#212529',
        Grey3: '#546179',
        Star: '#f5a623',
        Celeste: '#BCF0EC',
        Border: '#E9ECEF',
        Barbg: '#fbfbfb',
        Grey4: '#6C757D',
        Cross: '#fa3e2c',
        Down: '#CED4D9',
      },
      fontFamily: {
        poppins: 'Poppins',
       
      },
      backgroundImage: {
        Banner: "url('/src/assets/bannerbg.png')",
        Banner2: "url('/src/assets/bannerbg2.png')",
        
      }
    },
  },
  plugins: [],
}

