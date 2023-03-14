import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Photos = () => (
  <StaticQuery
    query={graphql`
      query {
        savethedate: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "savethedate" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        nous1: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "nous1" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
    }
    `}
    render={data => (
      <Section id="about">
        <Container>
          <LargeGrid>

            Aqui vai umas fotos.

          </LargeGrid>
          <br />    
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
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

const LargeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
`;

const Art = styled.figure`
  margin: 0;
  max-width: 300px;
  width: 100%;
`;

const Art_big = styled.figure`
  margin: 0;
  width: 100%;
`;

export default Photos;
