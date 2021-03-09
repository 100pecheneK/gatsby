/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pizza`,
        path: `${__dirname}/src/pizza/`,
      },
    },
  ],
  siteMetadata: {
    title: 'Pizza Joint',
    description: 'Make your own pizza fast',
  },
}
