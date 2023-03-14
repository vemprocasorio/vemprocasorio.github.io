import React from 'react';
import styled from 'styled-components';

import { Section, Container, SectionTitle, Red } from '@components/global';

const Where = () => (
        <Section id="where">
          
            <Container>
                <h1><SectionTitle>Cerimônia e Festa</SectionTitle></h1>
                <br />
                 <Grid>
                    <Art>
                        <h2>16 de dezembro de 2023</h2>
                        <h3>CCSL/University of São Paulo</h3>
                        <br />
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.269529770778!2d-46.73362434899728!3d-23.558761384608957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce561437311a2b%3A0x281256ef0da42272!2sCCSL+-+Centro+de+Compet%C3%AAncia+em+Software+Livre+da+Universidade+de+S%C3%A3o+Paulo!5e0!3m2!1sen!2sbr!4v1561326718902!5m2!1sen!2sbr" width="400" height="300" allowfullscreen></iframe>
                    </Art>
                    <Art>
                        <h2>July 17-18</h2>
                        <h3>Rebouças Convention Center</h3>
                        <br />
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14629.213012931381!2d-46.6679461!3d-23.5575497!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x225e51bfb9969f!2sReboucas%20Convention%20Center!5e0!3m2!1sen!2sbr!4v1582243739197!5m2!1sen!2sbr" width="400" height="300" allowfullscreen=""></iframe>
                    </Art>         
                </Grid>
            </Container>
        </Section>
);

const Art = styled.figure`
  width: 100%;
  margin: 0;
  > div {
    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
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

export default Where;