import React from "react";
import { Link, graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";

const PortfolioPage = ({data}) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const siteDescription = data.site.siteMetadata.description;

  return (
    <Layout>
      <SEO title={siteTitle} description={siteDescription} />
      <header>
        <h1>Portfolio</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus consequat diam, non fringilla ante faucibus vel. Etiam sed condimentum elit.</p>
      </header>
      <div className="card">
        <h1>Etiam nisl ligula, convallis quis diam sed</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius urna ullamcorper quam congue, a pretium sapien laoreet. Nullam pulvinar nunc mauris, sed consequat nisi dictum in. Aenean viverra lacus orci, efficitur pretium massa semper sed. Etiam nisl ligula, convallis quis diam sed, egestas posuere mauris. Nullam ut orci non nisi lobortis sagittis. Cras et ante risus. Proin lobortis enim non mi molestie, vel dapibus quam auctor.</p>

        <ul>
          <li><a href="https://youtube.com">YouTube</a></li>
          <li>Vestibulum vitae lacus felis.</li>
          <li>Cras vitae erat viverra.</li>
          <li>Proin ullamcorper ante a convallis convallis.</li>
          <li>Curabitur lobortis velit odio.</li>
        </ul>

        <p>Nullam condimentum ante at nisl fringilla hendrerit. Ut quis dapibus mi. Etiam interdum tempus luctus. Fusce gravida consequat nisi vitae scelerisque. Pellentesque sit amet magna sed justo posuere mattis sed sed leo. Aliquam ut volutpat ex. Sed quis auctor purus, et volutpat sapien. Fusce quis interdum massa.</p>

        <h2>Phasellus a porta odio. Donec lectus ante</h2>

        <p>Etiam posuere tortor sed eros convallis volutpat. Pellentesque dolor lectus, vestibulum eget arcu non, tincidunt commodo leo. Praesent nulla ligula, tempor quis interdum sit amet, laoreet tincidunt est. Vivamus porta ligula id augue condimentum, nec bibendum nulla pharetra. Vivamus pulvinar laoreet turpis quis sodales. Quisque rutrum ante at felis tempor, ut dictum orci ultrices. Aliquam volutpat lorem vitae imperdiet varius. Aenean vitae augue tincidunt, blandit enim non, varius mi. Duis non lectus et sem efficitur vehicula id vel magna.</p>

        <p>Integer condimentum, nibh eu lobortis posuere, risus massa cursus augue, a aliquam velit enim sit amet elit. Vestibulum neque erat, laoreet vel quam at, consequat bibendum ex. Maecenas quis nisl massa. Vestibulum tincidunt turpis vel eros finibus consectetur. Mauris id enim sollicitudin, elementum erat quis, pulvinar lacus. Phasellus a porta odio. Donec lectus ante, hendrerit quis malesuada sit amet, bibendum ut quam. Vivamus justo tellus, vulputate ac dictum eu, suscipit in leo.</p>

        <h2>Curabitur lobortis velit odio, quis luctus quam venenatis vel.</h2>

        <p>Proin ullamcorper ante a convallis convallis. Duis vel pretium urna. Nulla facilisi. Integer pulvinar odio ac ullamcorper placerat. Sed leo erat, vestibulum non risus in, convallis efficitur lectus. Fusce dolor leo, gravida vitae lacus et, ultrices viverra sapien. Phasellus ac ex eu odio rutrum egestas. Morbi blandit, orci sed elementum fringilla, velit tellus tincidunt quam, et semper leo nisl eu urna. Sed in diam et odio bibendum laoreet eu in est. Cras eget hendrerit sem. Mauris pharetra diam sem. Curabitur posuere, tellus id blandit tempor, magna arcu efficitur nulla, in semper nibh magna vel lacus. Donec ac ex mattis, posuere dolor a, faucibus eros.</p>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/YlpN3S16ZAs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <p>Sed mi urna, porta et pulvinar id, gravida a nunc. Aliquam vestibulum, odio in aliquam lobortis, nisl sapien posuere metus, et bibendum urna arcu id velit. Mauris pretium ligula id hendrerit convallis. Quisque condimentum neque in ultricies pulvinar. Sed eget condimentum dolor. Donec molestie sem justo, eu dictum sem dignissim finibus. Maecenas eu malesuada diam. Curabitur quis nisi pretium sapien ullamcorper venenatis sit amet at ipsum. Nulla fringilla quis lorem a convallis. Quisque maximus congue augue, nec fringilla eros ornare et. Pellentesque tincidunt in orci id pharetra. Curabitur nec pulvinar arcu. Aliquam at congue sapien, dignissim feugiat erat. In luctus luctus tortor, eu pulvinar lorem facilisis a.</p>

      </div>
    </Layout>
  ); 

}

export default PortfolioPage

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;