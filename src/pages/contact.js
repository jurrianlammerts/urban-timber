import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import '../utils/normalize.css';
import '../utils/css/screen.css';

const ContactPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Contact"
        keywords={[`Contact`, `offerte`, `urbantimber`, `rotterdam`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          {/* <p>Rotterdam</p>
          <p>+31612345678</p> */}

          <h2 id="forms">Neem contact met ons op</h2>
          <form method="post" action="#">
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="demo-name"
                  id="demo-name"
                  placeholder="Naam"
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="demo-email"
                  id="demo-email"
                  placeholder="Email"
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="demo-email"
                  id="demo-email"
                  placeholder="Telefoon"
                />
              </div>

              <div className="col-12">
                <textarea
                  name="demo-message"
                  id="demo-message"
                  placeholder="Voer uw bericht in"
                  rows={6}
                  defaultValue={''}
                />
              </div>

              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input type="submit" value="Stuur" className="primary" />
                  </li>
                  <li>
                    <input type="reset" defaultValue="Reset" />
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </article>
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ContactPage location={props.location} data={data} {...props} />
    )}
  />
);
