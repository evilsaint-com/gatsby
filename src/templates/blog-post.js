import React from "react";
import { Link } from "gatsby";
import  Layout from "../components/layout";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeRaw from 'rehype-raw'
import Comments from "../components/comments";

function BlogPost({ pageContext }) {
   
  const { post } = pageContext
  console.log(post)
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
         <Link className="card-link">              
         <h2 className="card-title">{post.frontmatter.title}</h2>
         </Link>
         <p className="card-date">{post.frontmatter.date}</p>
         <p className="card-description">{post.description}</p>
         <ReactMarkdown children={post.body} rehypePlugins={[rehypeRaw]} />
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
      <Comments issueTerm={post.fields.slug} />
   </Layout>
  )
}


export default BlogPost