import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        cc: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "cc-by-nc-nd" }
        ) {
          childImageSharp {
            fluid(maxWidth:85) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
          <Grid>
            <Art><Img fluid={data.cc.childImageSharp.fluid} /></Art>
            <div>
            <p>Linux is a registered trademark of Linus Torvalds. Monkey icon by Ludovic Riffaut. Mooks, the cow, is up for the commons.</p>
            </div>
            
            </Grid>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px;
  align-items: center;
  justify-items: center;
  text-align: right;
  margin: 0;
  background-color: ${props => props.theme.color.navbar};

  p {
    ${props => props.theme.font_size.smaller};
    color: ${props => props.theme.color.white.dark};
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: center;
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0px;
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
  max-width: 85px;
  width: 100%;
`;

export default Footer;
