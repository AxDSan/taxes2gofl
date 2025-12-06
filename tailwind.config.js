/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        // Logo colors: Red, Black, Green
        primary: {
          DEFAULT: '#dc2626', // Red
          medium: '#b91c1c',
          light: '#fee2e2',
          dark: '#991b1b',
        },
        secondary: {
          DEFAULT: '#16a34a', // Green
          medium: '#15803d',
          light: '#dcfce7',
          dark: '#166534',
        },
        neutral: {
          black: '#000000',
          dark: '#1a1a1a',
          'medium-dark': '#404040',
          medium: '#737373',
          'medium-light': '#d4d4d4',
          light: '#e5e5e5',
          white: '#ffffff',
        },
        // Legacy support
        dark: '#1a1a1a',
        light: '#ffffff',
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        heading: ['Gloock', 'serif'],
        display: ['Gloock', 'serif'],
        body: ['Geist', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-1': 'clamp(3.375rem, 8.631vi + -0.768rem, 7.000rem)',
        'display-2': 'clamp(2.625rem, 5.060vi + 0.196rem, 4.750rem)',
        'display-3': 'clamp(2.375rem, 3.274vi + 0.804rem, 3.750rem)',
        'display-4': 'clamp(2.375rem, 2.381vi + 1.232rem, 3.375rem)',
        'h-xxl': 'clamp(2.625rem, 0.893vi + 2.196rem, 3.000rem)',
        'h-xl': 'clamp(2.25rem, 0.893vi + 1.821rem, 2.625rem)',
        'h-l': 'clamp(1.5rem, 1.786vi + 0.643rem, 2.250rem)',
        'h-m': 'clamp(1.5rem, 1.190vi + 0.929rem, 2.000rem)',
        'h-s': 'clamp(1.25rem, 0.595vi + 0.964rem, 1.500rem)',
        'h-xs': '1.0rem',
        'b-l': '1.25rem',
        'b-m': '1.125rem',
        'b-s': '1.0rem',
        'b-xs': '0.875rem',
      },
      spacing: {
        's-12': 'clamp(8.0rem, 10.714vi + 2.857rem, 12.500rem)',
        's-11': 'clamp(6.0rem, 9.524vi + 1.429rem, 10.000rem)',
        's-10': 'clamp(4.0rem, 9.524vi + -0.571rem, 8.000rem)',
        's-9': 'clamp(3.0rem, 7.143vi + -0.429rem, 6.000rem)',
        's-8': 'clamp(2.25rem, 4.167vi + 0.250rem, 4.000rem)',
        's-7': 'clamp(1.5rem, 3.571vi + -0.214rem, 3.000rem)',
        's-6': 'clamp(1.5rem, 1.786vi + 0.643rem, 2.250rem)',
        's-5': 'clamp(1.125rem, 0.893vi + 0.696rem, 1.500rem)',
        's-4': 'clamp(1.0rem, 0.298vi + 0.857rem, 1.125rem)',
        's-3': '0.75rem',
        's-2': '0.5rem',
        's-1': '0.25rem',
        's-0': '0.0rem',
      },
      borderRadius: {
        'card-small': '0px',
        'card-medium': '2px',
        'card-large': '2px',
        'btn-small': '2px',
        'btn-medium': '4px',
        'btn-large': '4px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

