import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

class SuccessPage extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Succes" />
        <article className="post-content page-template no-image">
          <h2>Uw bericht is verstuurd</h2>
          <p>Iemand zal zo spoedig mogelijk contact met u opnemen.</p>
          <a href="/" className="button">
            Terug
          </a>
        </article>
      </Layout>
    );
  }
}

export default SuccessPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
