import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        ana1: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ana1" }
        ) {
          childImageSharp {
            fluid(maxWidth: 450) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        gus1: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "gus1" }
        ) {
          childImageSharp {
            fluid(maxWidth: 450) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        nous: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "nous2" }
        ) {
          childImageSharp {
            fluid(maxWidth: 450) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
    }
    `}
    render={data => (
      <Section id="about">
        <Container>
        <Grid>
            <div>
              <h2>A noiva</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis pulvinar augue.
              Aliquam libero odio, volutpat a felis id, bibendum facilisis ipsum. Aliquam 
              porttitor neque eget metus pharetra, ut mollis mauris dapibus. Duis quis euismod metus,
               a eleifend leo. Proin semper nisi quis finibus ultricies. Duis eget lacus sem. 
               Sed fringilla in mi ut maximus. Etiam quis eros nec massa mattis tincidunt
                eu eu lacus. Integer vel luctus turpis.
               Praesent semper eget nunc ut sollicitudin.
              </p>

            </div>
            <Art>
              <Img
                fluid={data.ana1.childImageSharp.fluid}
                style={{ borderRadius: '20%' }}
              />
            </Art>
          </Grid>
          <Grid>
          <div>
            <h2>O noivo</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis pulvinar augue.
              Aliquam libero odio, volutpat a felis id, bibendum facilisis ipsum. Aliquam 
              porttitor neque eget metus pharetra, ut mollis mauris dapibus. Duis quis euismod metus,
               a eleifend leo. Proin semper nisi quis finibus ultricies. Duis eget lacus sem. 
               Sed fringilla in mi ut maximus. Etiam quis eros nec massa mattis tincidunt
                eu eu lacus. Integer vel luctus turpis.
               Praesent semper eget nunc ut sollicitudin.
              </p>

            </div>
              <Art>
              <Img
                fluid={data.gus1.childImageSharp.fluid}
                style={{ borderRadius: '20%' }}
              />
            </Art>

          </Grid>
          <Grid inverse>
              <Art>
              <Img
                fluid={data.nous.childImageSharp.fluid}
                style={{ borderRadius: '20%' }}
              />
            </Art>
            <div>
            <h2>Nossa História</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis pulvinar augue.
              Aliquam libero odio, volutpat a felis id, bibendum facilisis ipsum. Aliquam 
              porttitor neque eget metus pharetra, ut mollis mauris dapibus. Duis quis euismod metus,
               a eleifend leo. Proin semper nisi quis finibus ultricies. Duis eget lacus sem. 
               Sed fringilla in mi ut maximus. Etiam quis eros nec massa mattis tincidunt
                eu eu lacus. Integer vel luctus turpis.
               Praesent semper eget nunc ut sollicitudin.
              </p>
            </div>
          </Grid>
          <br />    
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 20px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 300px;
  width: 100%;
`;

export default About;
