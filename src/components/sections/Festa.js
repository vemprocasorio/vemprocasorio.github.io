import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Festa = () => (
    <Section id="festa">
        <HeaderWrapper>
        <Container>
            <h1><b>Cerimônia e Festa</b></h1>
                 <Grid>
                    <Container>
                        <br />
                        <h2>16 de dezembro de 2023</h2>
                        <h2>às 15h30</h2>
                        <h4>Local: Club Homs</h4>
                        <h4>Endereço: Avenida Paulista, 735</h4>
                        <h3>Traje</h3>
                        <h4>Venha com traje social, porém confortável. Prezamos pela diversão!</h4>
                            <h4>Gravatas não são necessárias!
                        </h4>
                    </Container>
                    <center>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.039820842093!2d-46.65243688388906!3d-23.56701326768877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59b8958a0afd%3A0xed6dff4b578f94d3!2sClub%20Homs!5e0!3m2!1sen!2sbr!4v1676146749609!5m2!1sen!2sbr" 
                    width="300" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </center>
                </Grid>
        </Container>
        </HeaderWrapper>
    </Section>
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-bottom: 50px;
  padding-top: 30px;
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

export default Festa;