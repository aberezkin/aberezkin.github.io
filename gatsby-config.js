module.exports = {
  siteMetadata: {
    title: 'My portfolio',
  },
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