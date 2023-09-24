import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container, SectionTitle, Red } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Presentes = () => (
    <StaticQuery
    query={graphql`
      query {
        pix: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "qrcode-pix" }
        ) {
          childImageSharp {
            fluid(maxWidth: 450) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        praia: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "praia" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        drinks: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "drinks" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        cafemanha: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "cafemanha" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        riosf: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "passeioriosf" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        jantarfrutos: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "jantarfrutos" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }        
        jantarromantico: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "jantarromantico" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        praiadoforte: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "praiadoforte" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        mangueseco: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "mangueseco" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        aracaju: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "aracaju" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        voo: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "voo" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        morrosp: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "morrosp" }
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
    <Section id="presentes">
        <HeaderWrapper>
        <Container>
            <h1>Presentes</h1>
                    <p>Em nossa Lua de Mel, queremos viajar pelas praias do Nordeste por três semanas e
                      adoraríamos que seus presentes nos ajudassem a realizar essa viagem! Abaixo temos uma lista de sugestões de presente. Se quiser nos presentear com qualquer outro valor não listado abaixo fique à vontade.
                      Nos presenteie via
                     PIX para <strong>11-975722701</strong> ou pelo QR code abaixo:
                    </p>
                <VideoGrid>
                    <Art>
                    <Img fluid={data.pix.childImageSharp.fluid} style={{ borderRadius: '0%' }} />
                    </Art>
                </VideoGrid>
            <PhotoGrid>
            <Art>
              <Img fluid={data.drinks.childImageSharp.fluid } style={{ borderRadius: '50%' }} />
              <Title>Drinks</Title>
              <Subtitle>R$ 100,00</Subtitle>
            </Art>
            <Art>
              <Img fluid={data.cafemanha.childImageSharp.fluid} style={{ borderRadius: '50%' }}  />
              <Title>Café da manhã dos campeões</Title>
              <Subtitle>R$ 200,00</Subtitle>
            </Art>
            <Art>
              <Img fluid={data.riosf.childImageSharp.fluid} style={{ borderRadius: '100%' }} />
              <Title>Passeio Rio São Franscisco</Title>
              <Subtitle>R$ 300,00</Subtitle>
            </Art>
            <Art>
              <Img fluid={data.jantarfrutos.childImageSharp.fluid} style={{ borderRadius: '100%' }} />
              <Title>Jantar especial com frutos do mar</Title>
              <Subtitle>R$ 400,00</Subtitle>
            </Art>
            <Art>
              <Img fluid={data.jantarromantico.childImageSharp.fluid} style={{ borderRadius: '100%' }} />
              <Title>Jantar romântico</Title>
              <Subtitle>R$ 500,00</Subtitle>
            </Art>
            <Art>
              <Img fluid={data.praiadoforte.childImageSharp.fluid} style={{ borderRadius: '50%' }}  />
              <Title>Diária de hotel na Praia do Forte</Title>
              <Subtitle>R$ 750,00</Subtitle>
            </Art>
            <Art>
              <Img fluid={data.mangueseco.childImageSharp.fluid} style={{ borderRadius: '100%' }} />
              <Title>Diária de hotel em Mangue Seco (terra de Tieta)</Title>
              <Subtitle>R$ 850,00</Subtitle>
            </Art>
            <Art>
              <Img fluid={data.aracaju.childImageSharp.fluid} style={{ borderRadius: '100%' }} />
              <Title>Diária de hotel Aracaju</Title>
              <Subtitle>R$ 1250,00</Subtitle>
            </Art>
            <Art>
              <Img fluid={data.voo.childImageSharp.fluid} style={{ borderRadius: '100%' }} />
              <Title>Voô pra Salvador, Bahia</Title>
              <Subtitle>R$ 1500,00</Subtitle>
            </Art>
            <Art>
              <Img fluid={data.morrosp.childImageSharp.fluid} style={{ borderRadius: '100%' }} />
              <Title>Diária de hotel em Morro de SP</Title>
              <Subtitle>R$ 2000,00</Subtitle>
            </Art>
          </PhotoGrid>  
        </Container>
        </HeaderWrapper>
    </Section>
    )}
    />
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.white.regular};
  padding-bottom: 0px;
  padding-top: 50px;
  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 15px;
  }
`;

const Art = styled.figure`
    max-width: 200px;
    text-align: center;
    width: 100%;
    height: 100%;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  grid-gap: 64px;
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
  grid-gap: 64px;

`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 44px;
  margin-top: 10px;
  margin-bottom: 10px;
  @media (max-width: ${props => props.theme.screen.md}) {
    margin-left: -30px;
    margin-right: 30px;
    grid-template-columns: 1fr 1fr; 
    align-items: center;
    grid-gap: 10px;
    > ${Art} {
      order: 2;
    }
  }
  `;

const Title = styled.p`
  margin-top: 16px;
  font-size: 1.4em;
  color: ${props => props.theme.color.black.regular};
`;

const Subtitle = styled.p`
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.light};
`;


const Video = styled.iframe`
  width: 100%;
  max-width: 900px;
  min-height: 500px;
  height: 100%;
  margin: 0;
  border-radius: 2px;
  border: 10px solid #fff;
  box-shadow: 2px 2px 4px #aaa;
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

export default Presentes;