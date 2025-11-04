/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Toyota Brand Colors - Official
        toyota: {
          red: '#EB0A1E',        // Toyota Red (color principal oficial)
          darkRed: '#CC0000',    // Rojo oscuro
          black: '#000000',      // Negro (secundario)
          gray: '#54565A',       // Gris corporativo
          lightGray: '#E6E6E6',  // Gris claro
          white: '#FFFFFF',      // Blanco
          silver: '#C0C0C0',     // Plateado (híbrido/tecnología)
          green: '#00A650',      // Verde (ecológico/híbrido)
        },
        // Mantener colores Aruma como alias para compatibilidad (se reemplazarán en componentes)
        aruma: {
          pink: '#EB0A1E',       // Mapear a Toyota Red
          magenta: '#CC0000',    // Mapear a Dark Red
          purple: '#54565A',     // Mapear a Gray
          blue: '#00A650',       // Mapear a Green
          light: '#E6E6E6',      // Mapear a Light Gray
          dark: '#000000',       // Mapear a Black
        },
        // Semantic colors
        success: '#00A650',      // Verde Toyota para éxito
        warning: '#F59E0B',
        error: '#CC0000',        // Rojo oscuro Toyota
        info: '#54565A',         // Gris Toyota
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Inter', 'Helvetica Neue', 'sans-serif'],
      },
      backgroundImage: {
        // Gradientes Toyota
        'gradient-toyota': 'linear-gradient(135deg, #EB0A1E 0%, #000000 100%)',
        'gradient-toyota-light': 'linear-gradient(135deg, #FFFFFF 0%, #E6E6E6 100%)',
        'gradient-hybrid': 'linear-gradient(135deg, #00A650 0%, #54565A 100%)',
        // Mantener nombres Aruma como alias (se reemplazarán)
        'gradient-aruma': 'linear-gradient(135deg, #EB0A1E 0%, #000000 100%)',
        'gradient-aruma-light': 'linear-gradient(135deg, #E6E6E6 0%, #FFFFFF 100%)',
      },
      boxShadow: {
        'toyota': '0 20px 50px rgba(235, 10, 30, 0.15)',
        'toyota-lg': '0 30px 60px rgba(235, 10, 30, 0.25)',
        'hybrid': '0 15px 40px rgba(0, 166, 80, 0.20)',
        // Mantener alias Aruma
        'aruma': '0 20px 50px rgba(235, 10, 30, 0.15)',
        'aruma-lg': '0 30px 60px rgba(235, 10, 30, 0.25)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'slideIn': 'slideIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
