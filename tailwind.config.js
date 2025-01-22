/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      // Existing color configuration
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        primary: 'hsl(var(--primary) / <alpha-value>)',
        secondary: 'hsl(var(--secondary) / <alpha-value>)',
        destructive: 'hsl(var(--destructive) / <alpha-value>)',
        muted: 'hsl(var(--muted) / <alpha-value>)',
        accent: 'hsl(var(--accent) / <alpha-value>)',
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
        
        // Custom watch-related colors
        gold: {
          DEFAULT: '#D4AF37',
          50: '#F9F3D8',
          100: '#F5E9B3',
          200: '#F0DC8E',
          300: '#EBCE69',
          400: '#E6C144',
          500: '#D4AF37',
          600: '#BA9B2F',
          700: '#A08727',
          800: '#86731F',
          900: '#6C5F17'
        }
      },
      
      // Enhanced border color
      borderColor: {
        border: 'hsl(var(--border) / <alpha-value>)'
      },
      
      // Custom typography
      typography: {
        DEFAULT: {
          css: {
            color: 'hsl(var(--foreground))',
            a: {
              color: 'hsl(var(--primary))',
              '&:hover': {
                color: 'hsl(var(--primary) / 0.8)',
              },
            },
          },
        },
      },
      
      // Custom animations
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
      },
      
      // Custom shadows
      boxShadow: {
        'watch-card': '0 10px 25px rgba(0, 0, 0, 0.1)',
        'watch-hover': '0 15px 35px rgba(0, 0, 0, 0.15)',
      }
    }
  },
  plugins: [
    // Optional: Add typography plugin if you want advanced typography styles
    // require('@tailwindcss/typography'),
  ]
}