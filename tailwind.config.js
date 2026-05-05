/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B72FF',
          hover: '#095cd6',
        },
        text: {
          primary: '#111111',
          secondary: '#555555',
          inverse: '#ffffff',
        },
        surface: {
          base: '#ffffff',
          alt: '#f7f7f7',
          dark: '#000000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '32px',
        '4xl': '48px',
      },
      lineHeight: {
        xs: '18px',
        sm: '20px',
        md: '24px',
        lg: '26px',
        xl: '28px',
        '2xl': '32px',
        '3xl': '40px',
        '4xl': '56px',
      },
      spacing: {
        'section-y': '96px',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '20px',
      },
      boxShadow: {
        '1': '0 4px 20px rgba(0, 0, 0, 0.05)',
        '2': '0 10px 40px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        fast: '200ms',
        base: '300ms',
      },
    },
  },
  plugins: [],
}
