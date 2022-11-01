const slugify = require(`@sindresorhus/slugify`)

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    createNodeField({
      node,
      name: `slug`,
      value: `/${slugify(node.frontmatter.title)}`
    })
  }
}

const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
    query AllQueries{
      site {
        siteMetadata {
          title
        }
      }
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          fields {
            slug
          }
          excerpt
          frontmatter {
            date(formatString: "Do MMMM YYYY ")
            title
            description
          }
        }
      }
    }
  `
  )



  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
  const articles = result.data.allMdx.nodes
  console.log(articles)
  result.data.allMdx.nodes.forEach((node, index) => {
    createPage({
      path: `/blog${node.fields.slug}`,
      component: blogPostTemplate,
      context: {
                post: node,
                prev: index == 0 ? null : articles[index -1],
                next: articles.length -1 ? articles[index + 1] : null
      },
    })
  })
}

