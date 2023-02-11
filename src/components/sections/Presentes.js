import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container, SectionTitle, Red } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Presentes = () => (
    <Section id="presentes">
        <HeaderWrapper>
        <Container>
            <h1>Presentes</h1>
                    <p>Nós já temos duas casas montadas, 
                        uma em São Paulo e outra em Montréal no Canadá.
                        Por esse motivo não estamos aceitando items como presente.
                     Nossa lua de mel será pelas praias do Nordeste brasileiro. Nos presenteie com
                     PIX para <strong>11-975722701</strong> pra ajudar na nossa viagem! 
                    </p>
                <Grid>
                </Grid>
        </Container>
        </HeaderWrapper>
    </Section>
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.white.regular};
  padding-bottom: 50px;
  padding-top: 20px;
  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 15px;
  }
`;

const Art = styled.figure`
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
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

export default Presentes;