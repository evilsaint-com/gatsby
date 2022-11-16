import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import createTagsSet from "../utils/create-tags-set";
const Tags = () => {
    const tags = useStaticQuery(
        graphql`
        query MyQuery {
            siteBuildMetadata {
              id
            }
            allMdx(filter: {frontmatter: {posttype: {eq: "blog"}}}) {
              nodes {
                frontmatter {
                  tags
                }
              }
            }
          }
  
`)
const tagsArr = createTagsSet(tags);    
const sortedTagsArr = Array.from(tagsArr).join(" ").split(" ").filter(el => el != "").sort()
    return (

        <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "space-between", marginRight: 10}}>
            {
                sortedTagsArr.map(tag => 
                    <Link to={`/tags/${tag}`}>
                    <span className="tags">{tag} </span>
                    </Link>
                    )
                }
            </div>
            )
}

export default Tags;