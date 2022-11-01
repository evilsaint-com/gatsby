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
   console.log(pageContext)
  return (
    <Layout>
      <p>
      Ttile: {post.frontmatter.title}
      </p>
      <p>
      Date: {post.frontmatter.date}
      </p>
      <p>
      Description: {post.excerpt}
      </p>
      
   {next && 
      <Link to={`..${next.url}`}>
         {"<Previous      "}
         <span style={{marginRight: 50}}>{next.title}</span>
      </Link>
   }
   {prev && 
      <Link to={`..${prev.url}`}>
         {"Next>      "}
         <span>{prev.title}</span>
      </Link>
   }
   </Layout>
  )
}


export default blogPost