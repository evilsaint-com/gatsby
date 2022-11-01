import React from "react";
import { Link, graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";

const BlogPage = ({data}) => {
  console.log('data', data);
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const siteDescription = data.site.siteMetadata.description;
  const posts = data.allMdx.nodes;
  return (
    <Layout>
      <SEO title={siteTitle} description={siteDescription} />
      <h1>Blog</h1>
      <p>Blog page content</p>
      {posts.map((post) => {
        console.log('post line 17 blog.js', post)

        const title = post.frontmatter.title || post.fields.slug;

        return (
          <div className="card" key={post.fields.slug}>
            <Link className="card-link" to={`.${post.fields.slug}`}>              
            <h1 className="card-title">{title}</h1>
            </Link>
            <p className="card-date">{post.frontmatter.date}</p>
            <p className="card-description">{post.frontmatter.description}</p>
            
          </div>
        );
      })}
    </Layout>
  );
};


export default BlogPage;

export const pageQuery = graphql`
  {
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
`;