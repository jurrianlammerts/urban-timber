import React, { useRef, useState } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import ReactMapGL, { Marker } from 'react-map-gl';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Pin from '../components/pin';

import '../utils/normalize.css';
import '../utils/css/screen.css';

const ContactPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;
  const [fileInputValue, setFileInputValue] = useState(null);
  const fileInput = useRef(null);

  const [viewport, setViewport] = useState({
    latitude: 51.87392,
    longitude: 4.533994,
    width: '100%',
    height: '400px',
    zoom: 13,
  });

  function handleFileChange() {
    const path = fileInput.current.value;

    let fileName = path.replace(/^.*\\/, '');

    if (fileName.length > 25) {
      const extension = fileName.substr(fileName.lastIndexOf('.') + 1);
      fileName = fileName.substring(0, 40).concat(`.${extension}`);
    }
    setFileInputValue(fileName);
  }

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Contact"
        keywords={[`Contact`, `offerte`, `urbantimber`, `rotterdam`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <div className="post-content-contact">
            <div className="row">
              <div className="col-6">
                <h5>Contact</h5>
                <p>
                  tel: <a href="tel:+31636109646">+31636109646</a>
                </p>
                <p>
                  email:{' '}
                  <a href="mailto:info@urbantimber.nl">info@urbantimber.nl</a>
                </p>
                <p>kvk: NL224467669B01</p>
              </div>
              <div className="col-6">
                <h5>Adres</h5>
                <p>Alblasserdamstraat 10-049</p>
                <p>3076 JZ Rotterdam</p>
              </div>
            </div>
          </div>

          <ReactMapGL
            {...viewport}
            width="100%"
            mapStyle="mapbox://styles/mapbox/dark-v9"
            mapboxApiAccessToken={process.env.GATSBY_API_TOKEN}
            onViewportChange={(viewport) => setViewport(viewport)}
            maxZoom={13}
            minZoom={13}
          >
            <Marker longitude={4.533994} latitude={51.87392}>
              <a href="https://goo.gl/maps/gwM15sQ3W98mXG3V9">
                <Pin />
              </a>
            </Marker>
          </ReactMapGL>
{/* 
          <h2 id="forms">Of stuur ons een bericht</h2>
          <form
            name="contact"
            className="inputfile"
            method="post"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              name="subject"
              value="Bericht via UrbanTimber"
              className="hidden"
              readOnly
            />

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
                <label htmlFor="file" className="button">
                  {fileInputValue ? fileInputValue : 'Upload bestand'}
                </label>
                <input
                  id="file"
                  ref={fileInput}
                  onChange={handleFileChange}
                  name="file"
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
          </form> */}
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
    mapMarker: file(relativePath: { eq: "map-marker.png" }) {
      childImageSharp {
        fluid(maxWidth: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default (props) => (
  <StaticQuery
    query={indexQuery}
    render={(data) => (
      <ContactPage location={props.location} data={data} {...props} />
    )}
  />
);
