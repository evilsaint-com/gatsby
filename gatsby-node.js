
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
            posttype
          }
          body
        }
      }
    }
  `
  )


  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
  const tagsTemplate = path.resolve(`./src/templates/tags-template.js`)
  const articles = result.data.allMdx.nodes

  let tagsArr = []
  let blogArr = []
  let articleArr = []
  //only select posts with the type blog
  console.log(result.data.allMdx)
  blogArr = result.data.allMdx.nodes.filter(node => node.frontmatter.posttype == "blog")
  articleArr = result.data.allMdx.nodes.filter(node => node.frontmatter.posttype == "article")

  //modify tags from the query and push to tagsArr
  blogArr.forEach(
    node => {
      let tag = node.frontmatter.tags
      if (tag != null)
      {
        tag && tag.includes(",") ? 
        tag.split(",").map(tag => tagsArr.push(tag)) : tagsArr.push(tag)
      }
    }
  )
// trim whitespaces
  tagsArr = tagsArr.map(tag => tag && tag != undefined && tag.trim())
  //blog posts 8080/blog/x
  blogArr.forEach((node, index) => {
    createPage({
      path: `/blog${node.fields.slug}`,
      component: blogPostTemplate,
      context: {
                post: node,
                prev: index == 0 ? null : blogArr[index -1],
                next: blogArr.length -1 ? blogArr[index + 1] : null
      },
    })
  })
  articleArr.forEach((node, index) => {
    createPage({
      path: `/articles${node.fields.slug}`,
      component: blogPostTemplate,
      context: {
                post: node,
                prev: index == 0 ? null : articleArr[index -1],
                next: articleArr.length -1 ? articleArr[index + 1] : null
      },
    })
  })
  // tag posts 8080/tags/x
  blogArr.forEach((node, index) => {
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