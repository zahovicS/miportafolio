module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      darkex: {
        light: '#353535',
        DEFAULT: '#222222',
        // dark: '#202e78',
      }
    }
    ,
    fontFamily: {
      'montserrat': '"Montserrat", sans-serif',
      'mulish': '"Mulish", sans-serif',
      'display': ['Oswald'],
      'body': ['"Mulish"', 'sans-serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
