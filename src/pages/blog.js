import React, {useState} from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/header";

const BlogPage = ({data}) => {
  
  const posts = data.allMdx.nodes;
  
  const [searchInput, setSearchInput] = useState("");

  let filteredPosts = posts.filter(post => post.frontmatter.title.
    toLowerCase()
    .match(searchInput))

  const handleChange = (e) => {
      e.preventDefault();
      setSearchInput(e.target.value)
    }
    const loop = searchInput.length > 0 ? filteredPosts : posts
  return (
    <Layout>
      <Header handleChange={handleChange} />
      <header>
        <h1>Blog</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus consequat diam, non fringilla ante faucibus vel. Etiam sed condimentum elit.</p>
      </header>
      {
        loop.map((post) => {
          const title = post.frontmatter.title || post.fields.slug;
          const tag = post.frontmatter.tags && post.frontmatter.tags.includes(",") ? 
          post.frontmatter.tags.split(",") : post.frontmatter.tags
          
          return (
          <div className="card" key={post.fields.slug}>
            <Link className="card-link" to={`.${post.fields.slug}`}>              
            <h2 className="card-title">{title}</h2>
            {
              tag ?
              Array.isArray(tag) ? tag.map(tag => <span className="tags"> {tag} </span>)
              :
              <span className="tags"> {tag} </span>
              : null
            }
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
  query MyQuery{
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {posttype: {eq: "blog"}}}
      ) {
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
      }
    }
  }
`;