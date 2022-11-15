
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
  let ctfArr = []
  let tutorialArr = []
 
  //loop through AllQuery and split each category (determined with posttype in frontmatter)
  result.data.allMdx.nodes.forEach((node) => {
    if(node)
    {
      if(node.frontmatter.posttype == "blog")
      blogArr.push(node)
      else if(node.frontmatter.posttype == "article")
      articleArr.push(node)
      else if (node.frontmatter.posttype == "ctf")
      ctfArr.push(node)
      else if (node.frontmatter.posttype == "tutorial")
      tutorialArr.push(node)
    }
  })
  //blogArr = result.data.allMdx.nodes.filter(node => node.frontmatter.posttype == "blog")
  //articleArr = result.data.allMdx.nodes.filter(node => node.frontmatter.posttype == "article")
  //ctfArr = result.data.allMdx.nodes.filter(node => node.frontmatter.posttype == "ctf")

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
  //blog posts 8080/aricles/x
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
  //blog posts 8080/ctfs/x
  ctfArr.forEach((node, index) => {
    createPage({
      path: `/ctfs${node.fields.slug}`,
      component: blogPostTemplate,
      context: {
                post: node,
                prev: index == 0 ? null : ctfArr[index -1],
                next: ctfArr.length -1 ? ctfArr[index + 1] : null
      },
    })
  }),
  //blog posts 8080/tutorials/x
  tutorialArr.forEach((node, index) => {
    createPage({
      path: `/tutorials${node.fields.slug}`,
      component: blogPostTemplate,
      context: {
                post: node,
                prev: index == 0 ? null : tutorialArr[index -1],
                next: tutorialArr.length -1 ? tutorialArr[index + 1] : null
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