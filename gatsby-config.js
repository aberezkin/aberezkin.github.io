module.exports = {
  siteMetadata: {
    title: 'My portfolio',
  },
  pathPrefix: '/aberezkin.github.io',
  plugins: [
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Arvo', 'Roboto Slab'],
      },
    },
    'gatsby-plugin-react-helmet',
  ],
};