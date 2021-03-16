const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Pizzas {
      allMarkdownRemark(filter: { frontmatter: { title: { eq: "pizzas" } } }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(({ frontmatter: { slug } }) => {
    actions.createPage({
      path: '/pizzas/' + slug,
      component: path.resolve('./src/templates/pizza-details.js'),
      context: { slug: slug },
    })
  })
}
