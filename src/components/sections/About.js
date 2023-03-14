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
              "Artista, Psicóloga e um raio de luz na minha vida. A Ana Carolina traz muito amor e
              alegria pra nossas vidas. Com a leveza da artista que ela é, está sempre presente
              para me confortar nas minhas dificuldades e dançar junto nos bons momentos.
              A gente começou a namorar e dali a relação foi evoluindo, até que em um
              momento eu tinha certeza que era pra sempre!" <br /><i>por Gustavo</i>
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
              "Amor é o mais belo dos sentimentos. Dentro dele cabe paciência, parceria, e um trabalho diário.
              Aprendo todos os dias a amar com meu amor. Ele me ensina a viver com os olhos de alguém que se
              encanta com a vida e que sempre enxerga um campo fértil, mesmo na falta de chuva. É com esse parceiro
              que eu quero seguir amando!"
               <br />
               <i>por Ana Carolina</i>
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
              Já se conheciam há alguns anos das festas em Barão Geraldo, mas um dia,
              durante a pandemia, marcaram de se encontrar na Avenida Paulista depois de
              paquerarem, cada um de seu isolamento, por dois meses.
              A partir daí construiram uma relação cada vez mais profunda. E já se casaram uma vez
               - no civil, em 5 de março de 2022 - e convidam família e amiges para celebrar
               essa união mais uma vez!
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
