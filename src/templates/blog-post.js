import React from "react";
import { Link } from "gatsby";
import  Layout from "../components/layout";

function blogPost({ pageContext }) {
   
  const { post } = pageContext
  const prev = pageContext.prev 
  ? {
    url : `${pageContext.prev.fields.slug}`,
    title : pageContext.prev.frontmatter.title 
  } : null

  const next = pageContext.next 
  ? {
    url : pageContext.next.fields.slug,
    title : pageContext.next.frontmatter.title 
  } : null

  return (

   <Layout>
      <div className="card" key={post.fields.slug}>
         <Link className="card-link" to={`.${post.fields.slug}`}>              
         <h2 className="card-title">{post.frontmatter.title}</h2>
         </Link>
         <p className="card-date">{post.frontmatter.date}</p>
         <p className="card-description">{post.description}</p>

         <nav>
         {next && 
         <Link to={`..${next.url}`} className="previous">
            <span>&lt; {next.title} </span>
         </Link>
         }
         {prev && 
            <Link to={`..${prev.url}`} className="next">
               <span>{prev.title} &gt;</span>
            </Link>
         }
         </nav>
      </div>
   </Layout>
  )
}


export default blogPost