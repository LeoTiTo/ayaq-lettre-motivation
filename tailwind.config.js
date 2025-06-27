/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,jsx,mdx}',
      './components/**/*.{js,jsx}',
      './content/**/*.{mdx}'
    ],
    theme: {
      extend: {
        keyframes: {
          flip: {
            '0%':   { transform: 'rotateY(0deg)' },
            '40%':  { transform: 'perspective(600px) rotateY(180deg)' },
            '100%': { transform: 'perspective(600px) rotateY(180deg)' },
          },
          'flip-back': {
            '0%':   { transform: 'perspective(600px) rotateY(180deg)' },
            '100%': { transform: 'perspective(600px) rotateY(0deg)' },
          },
          'fade-in': {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
        },
        animation: {
          flip: 'flip 0.7s cubic-bezier(0.4,0.2,0.2,1) forwards',
          'flip-back': 'flip-back 0.7s cubic-bezier(0.4,0.2,0.2,1) forwards',
          'fade-in': 'fade-in 1s ease-in forwards',
        },
      }
    },
    plugins: [
      require('@tailwindcss/typography'),
    ]
  }
  