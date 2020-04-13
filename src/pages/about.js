import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

import '../utils/normalize.css';
import '../utils/css/screen.css';

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  console.log(data);

  return (
    <Layout title={siteTitle}>
      <SEO title="ABout" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <p>
            Wij staan voor maatwerk en gezelligheid. Wij maken meubels van alle
            soorten materiaal in welke kleur dan ook, je kan het zo gek niet
            bedenken. Uw smaak is uniek. En zo moet ook uw meubel zijn. Wij
            bouwen met passie en nauwkeurigheid aan een meubel naar uw wens en
            zijn pas tevreden wanneer u verliefd bent op het resultaat.
          </p>

          <br />
          <h2 className="page-head-title">
            Zoals we in Rotterdam zeggen: “Geen woorden maar daden”.
          </h2>

          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.woodTools.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>
              Keuken van Jurrian Lammerts
            </figcaption>
          </figure>

          <h2 id="forms">Vraag een offerte aan</h2>
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
              {/* Break */}
              <div className="col-6 col-12-xsmall">
                <select name="demo-category" id="demo-category">
                  <option value>- Categorie -</option>
                  <option value={1}>Kast</option>
                  <option value={1}>Tafel</option>
                  <option value={1}>Maatwerk</option>
                  <option value={1}>Anders</option>
                </select>
              </div>

              {/* <div className="col-4 col-12-small">
                <input
                  type="radio"
                  id="demo-priority-low"
                  name="demo-priority"
                  defaultChecked
                />
                <label htmlFor="demo-priority-low">Low</label>
              </div>
              <div className="col-4 col-12-small">
                <input
                  type="radio"
                  id="demo-priority-normal"
                  name="demo-priority"
                />
                <label htmlFor="demo-priority-normal">Normal</label>
              </div>
              <div className="col-4 col-12-small">
                <input
                  type="radio"
                  id="demo-priority-high"
                  name="demo-priority"
                />
                <label htmlFor="demo-priority-high">High</label>
              </div> */}

              {/* <div className="col-6 col-12-small">
                <input
                  type="checkbox"
                  id="demo-human"
                  name="demo-human"
                  defaultChecked
                />
                <label htmlFor="demo-human">I am a human</label>
              </div> */}
              {/* Break */}
              <div className="col-12">
                <textarea
                  name="demo-message"
                  id="demo-message"
                  placeholder="Voer indien nodig een extra beschrijving in"
                  rows={6}
                  defaultValue={''}
                />
              </div>
              {/* Break */}
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      // defaultValue="Send Message"
                      value="Stuur"
                      className="primary"
                    />
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
    woodTools: file(relativePath: { eq: "project-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
);
