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
          <div className="post-content-body">
            <h1>Uw bericht is verstuurd</h1>
            <p>Iemand zal zo spoedig mogelijk contact met u opnemen.</p>
          </div>
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
