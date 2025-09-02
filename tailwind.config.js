/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette personnalisée
        'nordic': {
          50: '#F8F9FA',    // Gris très clair
          100: '#F1F3F4',   // Gris clair
          200: '#E8EAED',   // Gris moyen clair
          300: '#DADCE0',   // Gris moyen
          400: '#BDC1C6',   // Gris
          500: '#9AA0A6',   // Gris foncé
          600: '#84888d',   // Couleur principale grise
          700: '#5F6368',   // Gris très foncé
          800: '#3C4043',   // Gris sombre
          900: '#202124',   // Noir doux
          950: '#111827',   // Noir profond
        },
        'accent': {
          50: '#E6F7F8',
          100: '#CCEFF1',
          200: '#99DFE3',
          300: '#66CFD5',
          400: '#33BFC7',
          500: '#00A3AC',   // Couleur principale cyan
          600: '#008A92',
          700: '#007178',
          800: '#00585E',
          900: '#003F44',
        },
        'metal': {
          50: '#F0F0F0',    // Highlight - très clair
          100: '#E8E8E8',   // Gris très clair
          200: '#D8D8D8',   // Gris clair
          300: '#C8C8C8',   // Gris moyen clair
          400: '#C0C0C0',   // Silver classique
          500: '#B0B0B0',   // Gris moyen
          600: '#A0A0A0',   // Gris moyen foncé
          700: '#909090',   // Gris foncé
          800: '#808080',   // Gris sombre
          900: '#707070',   // Gris très sombre
        }
      },
      fontFamily: {
        'sans': ['Helvetica Light', 'Helvetica', 'Arial', 'sans-serif'],
        'display': ['Nunito Sans', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        'logo': ['Lastica', 'Arial', 'sans-serif'],
      },
      spacing: {
        // Système 8px
        '18': '4.5rem',    // 72px
        '88': '22rem',     // 352px
        '128': '32rem',    // 512px
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'nordic': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'nordic-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'nordic-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
