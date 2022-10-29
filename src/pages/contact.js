import React from "react";
import { Link, graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";

const ContactPage = ({data}) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const siteDescription = data.site.siteMetadata.description;
  
  return (
    <Layout>
      <SEO title={siteTitle} description={siteDescription} />
      <div>
        <h1>Contact</h1>
        <p>The contact page</p>
      </div>
    </Layout>
  ); 

}

export default ContactPage

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;