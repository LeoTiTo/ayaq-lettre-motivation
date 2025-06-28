/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,jsx,mdx}',
      './components/**/*.{js,jsx}',
      './content/**/*.{mdx}'
    ],
    theme: {
      extend: {
      }
    },
    plugins: [
      require('@tailwindcss/typography'),
    ]
  }
  