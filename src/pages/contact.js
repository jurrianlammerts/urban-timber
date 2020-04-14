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
          <div className="post-content-contact">
            <p>Paul Krugerstraat 89A</p>
            <p>3082 GD Rotterdam</p>
            <p>
              tel: <a href="tel:+31636109646">+31636109646</a>
            </p>
            <p>
              email:{' '}
              <a href="mailto:info@urbantimber.nl">info@urbantimber.nl</a>
            </p>
            <p>kvk: NL224467669B01</p>
          </div>

          <h2 id="forms">Neem contact met ons op</h2>
          <form
            name="contact"
            method="post"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input type="text" name="name" id="name" placeholder="Naam" />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="number"
                  id="number"
                  placeholder="Telefoon"
                />
              </div>
              <div className="col-12">
                <div className="post-content-contact">
                  <h4>Heb je zelf een tof idee?</h4>
                  <p>Upload hier de foto van je idee!</p>
                </div>
                <label for="file" class="button">
                  Upload bestand
                </label>
                <input
                  id="file"
                  name="number"
                  style={{ visibility: 'hidden' }}
                  type="file"
                />
              </div>
              <div className="col-12">
                <textarea
                  name="message"
                  id="message"
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
