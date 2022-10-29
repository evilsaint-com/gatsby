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
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": `blogs`,
      "path": `${__dirname}/src/blog/`,
    },
    __key: "blogs"
  }]
};
