import React from "react";
import { Link, graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";

const FourOhFourPage = ({data}) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const siteDescription = data.site.siteMetadata.description;
  
  return (
    <Layout>
      <SEO title={siteTitle} description={siteDescription} />
      <div>
        <h1>Hmmmmmm</h1>
        <p>You screwed something up there didn't you!!! ;-)</p>
      </div>
    </Layout>
  ); 

}
export default FourOhFourPage

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;