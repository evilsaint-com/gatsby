import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import { useStaticQuery } from "gatsby";
import createTagsSet from "../utils/create-tags-set";

const TagsPage = ({pageContext}) => {
    const posts = pageContext.posts.data.allMdx.nodes
    

let tagsArr = createTagsSet(pageContext.posts.data)
tagsArr = Array.from(tagsArr).map(tag => tag.trim())
const postsWithTags = posts.filter(post => post.frontmatter.tags && post.frontmatter.tags.includes(pageContext.tag))
return (
<Layout>
    <header>
        <h1>{pageContext.tag} Posts</h1>
    </header>
    {
    postsWithTags.map(post =>
    {
        return (
            <div className="card" >
        <Link className="card-link" to={`../../blog${post.fields.slug}`}>              
        <h2 className="card-title">{post.frontmatter.title}</h2>
        </Link>
        <p className="card-date">{post.frontmatter.date}</p>
        <p className="card-description">{post.excerpt}</p>
        </div>
    )
    })}
   </Layout>
  );
};


export default TagsPage;