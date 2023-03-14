import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { Section, Container, SectionTitle, Red } from '@components/global';
import Img from 'gatsby-image';
import background from '@static/pebble.jpg';

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        pebble: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "pebble" }
        ) {
          childImageSharp {
            fluid(maxWidth:2100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
        <FooterWrapper>
        <StyledContainer>
            <p><span>🖤💙</span></p>
        </StyledContainer>
      </FooterWrapper>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  align-items: center;
  justify-items: center;
  text-align: center;
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

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  background: url(${background}) no-repeat left bottom;
  background-size: cover;
  color: #fff;
  padding: 1000px 0;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    background-color: rgba(256, 256, 256, 0.2);
    border-radius: 4px;
    margin: 0 5px;
    padding: 5px 2px;
    display: flex;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

const LargeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
`;

const Art_big = styled.figure`
  margin: 0;
  width: 100%;
`;

const Art = styled.figure`
  max-width: 85px;
  width: 100%;
`;

export default Footer;
