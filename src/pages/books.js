import React from "react";
import { Link, graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";

const BooksPage = ({data}) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const siteDescription = data.site.siteMetadata.description;
  
  return (
    <Layout>
      <SEO title={siteTitle} description={siteDescription} />
      <div>
        <h1>Books</h1>
        <p>The books page</p>
      </div>
    </Layout>
  ); 

}
export default BooksPage

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;