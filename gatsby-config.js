const path = require('path');

module.exports = {
  /*
  siteMetadata: {
    title: '',
    fullTitle: '',
    description: '',
    siteUrl: '',
    image: '',
    locale: '',
  },
  */
  plugins: [
    /*
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: '',
        short_name: '',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'standalone',
        icon: '',
      },
    },
    */
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: process.env.NODE_ENV !== 'production',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
  ],
};
