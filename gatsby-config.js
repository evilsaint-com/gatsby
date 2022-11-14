module.exports = {
  siteMetadata: {
    title: `My Online Portfolio`,
    description: `my home on the web`,
    siteUrl: `https://evilsaint.cloud`,
    social: {
      twitter: `https://twitter.com/_EvilSaint_`
    },
  },
  plugins: [
  `gatsby-plugin-image`, 
  `gatsby-plugin-sitemap`, 
  `gatsby-plugin-mdx`, 
  `gatsby-plugin-sharp`, 
  `gatsby-transformer-sharp`,
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      extensions: [`.mdx`, `md`],
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-highlight-code`,
          options: {
            terminal: "ubuntu",
          },
        },
      ],
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-highlight-code`,
        },
      ],
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": `blogs`,
      "path": `${__dirname}/src/blog/`,
    },
    __key: "blogs"
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": `articles`,
      "path": `${__dirname}/src/articles/`,
    },
    __key: "articles"
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": `ctfs`,
      "path": `${__dirname}/src/ctfs/`,
    },
    __key: "ctfs"
  },
]
};
