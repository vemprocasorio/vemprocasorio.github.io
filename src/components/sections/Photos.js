import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Photos = () => (
  <StaticQuery
    query={graphql`
      query {
        nous6: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "nous6" }
        ) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        nous4: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "nous4" }
        ) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        nous5: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "nous5" }
        ) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <Container>
          <PhotoGrid>
            <Art>
              <Img fluid={data.nous6.childImageSharp.fluid} />
            </Art>
            <Art>
              <Img fluid={data.nous5.childImageSharp.fluid} />
            </Art>
          </PhotoGrid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: #f5f5f5;
  padding-top: 16px;
  padding-bottom: 50px;
  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 16px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;
  border-radius: 2px;
  border: 10px solid #fff;
  box-shadow: 2px 2px 4px #aaa;
  > div {
    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
      border-radius: 10px;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 14px;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;
    > ${Art} {
      order: 2;
    }
  }
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
`;

const Video = styled.iframe`
  width: 100%;
  max-width: 600px;
  min-height: 400px;
  height: 100%;
  margin: 0;
  border-radius: 2px;
  border: 10px solid #fff;
  box-shadow: 2px 2px 4px #aaa;
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  align-items: center;
  grid-gap: 64px;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: ${props => props.theme.screen.md}) {
    margin-left: 30px;
    margin-right: 30px;
    grid-template-columns: 3fr 2fr; 
    grid-gap: 40px;
    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;
  background-color: ${props => props.theme.color.secondary};
  color: rgb(255, 255, 255);
  border-radius: 5px;
  padding: 10px 20px;
  box-shadow: rgb(168, 26, 58) 3px 4px;
  position: relative;
  top: 1em;
  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default Photos;