import React from "react";
import { Link, graphql } from "gatsby";
import background from "../../public/static/404.jpg"

const FourOhFourPage = ({data}) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const siteDescription = data.site.siteMetadata.description;
  const styles = {
    container: {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
    }
};
  return (
    
  <div style={styles.container}>
    
  </div>
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