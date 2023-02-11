import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container, SectionTitle, Red } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Festa = () => (
    <Section id="festa">
        <HeaderWrapper>
        <Container>
            <h1>Cerimônia e Festa</h1>
                 <Grid>
                    <Container>
                        <h2>16 de dezembro de 2023</h2>
                        <h2>às 15h30</h2>
                        <h4>Local: Club Homs</h4>
                        <h4>Endereço: Avenida Paulista, 735</h4>
                        <br />
                        <br />
                        <h3>Traje</h3>
                        <p>Venha com uma ótima roupa de festa de casamento que também seja confortável!</p>


                    </Container>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.039820842093!2d-46.65243688388906!3d-23.56701326768877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59b8958a0afd%3A0xed6dff4b578f94d3!2sClub%20Homs!5e0!3m2!1sen!2sbr!4v1676146749609!5m2!1sen!2sbr" width="450" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Grid>
        </Container>
        </HeaderWrapper>
    </Section>
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-bottom: 50px;
  padding-top: 20px;
  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 15px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;
  border-radius: 20px;
  border: 4px solid #fff;
  > div {
    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
      border-radius: 10px;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;
  margin-top: 50px;
  margin-bottom: 50px;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;
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

export default Festa;