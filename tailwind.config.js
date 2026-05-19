/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#0F75BC',
          foreground: '#FFFFFF',
          hover: '#0d69a8',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: '#F7941D',
          foreground: '#FFFFFF',
          hover: '#e08515',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
        brand: {
          blue: '#0F75BC',
          orange: '#F7941D',
          navy: '#354A9F',
        },
        surface: {
          deepest: '#0A1530',
          base: '#0D1B3E',
          elevated: '#132A55',
        },
        text: {
          primary: '#FFFFFF',
          secondary: 'rgba(255, 255, 255, 0.70)',
          muted: 'rgba(255, 255, 255, 0.60)',
          inverse: '#0A1530',
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
        '5xl': '56px',
        '6xl': '64px',
      },
      spacing: {
        'section-y': '120px',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(15, 117, 188, 0.1)',
        'glow': '0 0 40px rgba(15, 117, 188, 0.15)',
        'glow-lg': '0 0 60px rgba(15, 117, 188, 0.2)',
        'glow-orange': '0 0 30px rgba(247, 148, 29, 0.2)',
      },
      transitionDuration: {
        fast: '200ms',
        base: '300ms',
        slow: '500ms',
      },
      backgroundImage: {
        'hero-grid': 'linear-gradient(rgba(15, 117, 188, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 117, 188, 0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'hero-grid': '60px 60px',
      },
    },
  },
  plugins: [],
}
