import React from "react";
import  Layout  from "../components/layout"
import {graphql, Link} from "gatsby"
const Ctfs = ({data}) => {
    const posts = data.allMdx.nodes;
    console.log(data)
    return(
        <Layout>
    <header>
        <h1>CTFs</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus consequat diam, non fringilla ante faucibus vel. Etiam sed condimentum elit.</p>
    </header>
    {posts.map((post) => {
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
    )
}

export default Ctfs

export const ctfQuery = graphql`
  query CtfQuery{
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
        sort: {frontmatter: {date: DESC}}
        filter: {frontmatter: {posttype: {eq: "ctf"}}}
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
          posttype
        }
      }
    }
  }
`;