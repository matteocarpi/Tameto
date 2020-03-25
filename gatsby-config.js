// eslint-disable-next-line no-undef
module.exports = {
  siteMetadata: {
    title: 'Tameto Gatsby',
    description: 'A more than minimal Gatsby starter',
    author: '@matteocarpi',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        // eslint-disable-next-line no-undef
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'tameto-gatsby',
        short_name: 'tameto',
        start_url: '/',
        background_color: '#F6D98E',
        theme_color: '#3B4566',
        display: 'minimal-ui',
        icon: 'src/images/tameto-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
