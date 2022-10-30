import React from "react";
function blogPost({ pageContext }) {
  const { post } = pageContext

  return (
    <div>
      <p>

      Ttile: {post.frontmatter.title}
      </p>
      <p>

      Date: {post.frontmatter.date}
      </p>
      <p>

      Description: {post.excerpt}
      </p>
    </div>
  )
}


export default blogPost