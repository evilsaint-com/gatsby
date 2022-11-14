
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
    query AllQueries {
      site {
        siteMetadata {
          title
        }
      }
      allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
        nodes {
          fields {
            slug
          }
          excerpt
          frontmatter {
            date(formatString: "Do MMMM YYYY ")
            title
            description
            tags
          }
          body
        }
      }
    }
  `
  )

console.log(result)
console.log(result.data.allMdx.nodes)
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
  const tagsTemplate = path.resolve(`./src/templates/tags-template.js`)
  const articles = result.data.allMdx.nodes

  let tagsArr = []
  result.data.allMdx.nodes.forEach(
    node => {
      let tag = node.frontmatter.tags
      if (tag != null)
      {
        tag && tag.includes(",") ? 
        tag.split(",").map(tag => tagsArr.push(tag)) : tagsArr.push(tag)
      }
    }
  )

  tagsArr = tagsArr.map(tag => tag && tag != undefined && tag.trim())
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
  result.data.allMdx.nodes.forEach((node, index) => {
    createPage({
      path: `/tags/${tagsArr[index]}`,
      component: tagsTemplate,
      context: {
                posts: result,
                tag: tagsArr[index]
      },
    })
  })
}