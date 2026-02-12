/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sifrah Brand Colors - Rosa/Magenta (Light Mode)
        sifrah: {
          // Primarios - Rosa/Magenta vibrante
          pink: '#ef008f',            // Rosa principal (acento primario)
          darkPink: '#a30061',        // Rosa hover/oscuro
          lightPink: '#ff89d0',       // Rosa claro (acentos)
          softPink: '#fce4f0',        // Rosa suave (badges, highlights)

          // Fondos claros (Light Mode)
          white: '#FFFFFF',           // Fondo principal
          snow: '#FAFAFA',            // Fondo alternativo
          lightGray: '#F5F5F7',       // Fondo de cards
          border: '#E5E7EB',          // Bordes suaves

          // Textos
          textDark: '#1F2937',        // Texto principal (casi negro)
          textMedium: '#6B7280',      // Texto secundario
          textLight: '#9CA3AF',       // Texto terciario

          // Acentos tech/datos
          cyan: '#06B6D4',            // Cyan (datos, tech)
          electric: '#22D3EE',        // Cyan brillante (gráficos)

          // Éxito/Positivo
          emerald: '#10B981',         // Esmeralda (éxito, crecimiento)
          green: '#22C55E',           // Verde (positivo)

          // Premium
          gold: '#D4AF37',            // Dorado (bisutería, premium)

          // Alerta/Negativo
          red: '#EF4444',             // Rojo (alerta)
          amber: '#F59E0B',           // Ámbar (advertencia)
        },
        // Semantic colors
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#06B6D4',
      },
      fontFamily: {
        sans: ['DM Sans', 'Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['DM Sans', 'Inter', 'Helvetica Neue', 'sans-serif'],
      },
      backgroundImage: {
        // Gradientes Sifrah Light Mode
        'gradient-sifrah': 'linear-gradient(135deg, #ef008f 0%, #a30061 100%)',
        'gradient-sifrah-light': 'linear-gradient(135deg, #FFFFFF 0%, #FAFAFA 100%)',
        'gradient-sifrah-soft': 'linear-gradient(135deg, #fce4f0 0%, #FFFFFF 100%)',
        'gradient-sifrah-tech': 'linear-gradient(135deg, #06B6D4 0%, #22D3EE 100%)',
        'gradient-sifrah-premium': 'linear-gradient(135deg, #ef008f 0%, #D4AF37 100%)',
        'gradient-hero': 'linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)',
      },
      boxShadow: {
        'sifrah': '0 20px 50px rgba(239, 0, 143, 0.1)',
        'sifrah-lg': '0 30px 60px rgba(239, 0, 143, 0.15)',
        'sifrah-glow': '0 0 30px rgba(239, 0, 143, 0.2)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 4px 20px rgba(239, 0, 143, 0.12)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'slideIn': 'slideIn 0.4s ease-out',
        'slideUp': 'slideUp 0.5s ease-out',
        'pulse-glow': 'pulseGlow 2s infinite',
        'bounce-subtle': 'bounceSubtle 2s infinite',
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
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(239, 0, 143, 0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(239, 0, 143, 0.3)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}
