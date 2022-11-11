import React from "react";
import { Link, graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";

const AboutPage = ({data}) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const siteDescription = data.site.siteMetadata.description;
  
  return (
    <Layout>
      <SEO title={siteTitle} description={siteDescription} />
      <header>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus consequat diam, non fringilla ante faucibus vel. Etiam sed condimentum elit.</p>
      </header>
      <div className="card">

        EvilSaint vs PentesterLab (3840 x 2160)
        EvilSaint vs INE (3840 x 2160)
        EvilSaint vs CQure Academy (3840 x 2160)
        EvilSaint vs Hack the Box (3840 x 2160)
        EvilSaint vs Pentester Academy (3840 x 2160)
        EvilSaint vs EleanSecurity (3840 x 2160)
        EvilSaint vs Vulnhub (3840 x 2160)
        
      </div>
    </Layout>
  ); 

}
export default AboutPage

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;














