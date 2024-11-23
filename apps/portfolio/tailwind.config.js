const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    screens: {
      xs: '376px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      blue: colors.blue,
      cyan: colors.cyan,
      emerald: {
        ...colors.emerald,
        650: '#058A61',
        750: '#046D4F',
        850: '#055640',
        950: '#054232',
      },
      fuschia: colors.fuchsia,
      green: colors.green,
      orange: colors.orange,
      red: colors.red,
      stone: {
        ...colors.stone,
        650: '#514D48',
        750: '#312D2B',
        850: '#23201F',
        950: '#151311',
      },
      teal: colors.teal,
      violet: colors.violet,
      yellow: colors.yellow,
      zinc: colors.zinc,
    },
    fontFamily: {
      sans: ['var(--font-sans)', ...fontFamily.sans],
      serif: ['var(--font-serif)', ...fontFamily.serif],
      handwritten: ['var(--font-handwritten)', 'cursive'],
    },
    extend: {
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        'gradlin-1': 'var(--gradlin-1)',
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        accent: {
          DEFAULT: colors.emerald[400],
          foreground: colors.emerald[400],
        },
        background: colors.stone[600],
        'background-transparent': 'var(--background-transparent)',
        black: 'var(--black)',
        border: colors.stone[500],
        card: {
          DEFAULT: colors.zinc[800],
          foreground: colors.zinc[300],
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        foreground: 'var(--foreground)',
        input: 'var(--input)',
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        popover: {
          DEFAULT: colors.zinc[800],
          foreground: colors.zinc[400],
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        ring: 'var(--ring)',
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        white: 'var(--white)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
