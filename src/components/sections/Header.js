import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        art_build: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "nous" }
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
      <HeaderWrapper>
        <Container>
          <Grid>
            <Art>
              <Img
                fluid={data.art_build.childImageSharp.fluid}
                style={{ borderRadius: '60%' }}
              />
            </Art>
            <Text>
              <h1>
                Vem pro casório!
              </h1>
              <h2>16 de dezembro de 2023</h2>
              <h3>| Club Homs, São Paulo</h3>
            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 80px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 100px;
    padding-bottom: 32px;
  }
`;

const Art = styled.figure`
  margin: 9px;
  max-width: 400px;
  width: 100%;
  justify-self: center;
`;


const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 10px;

    > ${Art} {
      order: 2;
    }
  }

  h1 {
    font-size: 75px;
    line-height: 100px;
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`;

export default Header;
