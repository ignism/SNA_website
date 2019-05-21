const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project 
  content: [
    './theme/src/**/*.vue',
    './theme/public/templates/**/*.twig',
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-nested'),
    require('postcss-advanced-variables'),
    require('tailwindcss')('./tailwind.js'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : [],
    ...process.env.NODE_ENV === 'production'
      ? require('cssnano')
      : []
  ]
}

// module.exports = ({ options }) => ({
//   ident: 'postcss',
//   syntax: 'postcss-scss',
//   map: {
//       'inline': true,
//   },
//   plugins: {
//     'postcss-import': {},
//     'postcss-mixins': {},
//     'postcss-nested': {},
//     'postcss-advanced-variables': {},
//     'tailwindcss': 'tailwind.js',
//     'autoprefixer': {},
//     '@fullhuman/postcss-purgecss': options.purgecss,
//     'cssnano': options.cssnano
//   }
// })