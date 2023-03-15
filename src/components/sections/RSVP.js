import React from 'react';
import styled from 'styled-components';

import { Section, Container} from '@components/global';

const RSVP = () => (
    <Section id="rsvp">
        <HeaderWrapper>
        <Container>
            <h1>RSVP</h1>
            <center>
              <Iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeRnAX2UgTBe58EL2GbBQ0Dn5vmXZAhCqMH50IWMhmxtMKOig/viewform?embedded=true">
                Chargement en cours…
              </Iframe>
            </center>
        </Container>
        </HeaderWrapper>
    </Section>
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.white.dark};
  padding-bottom: 20px;
  padding-top: 20px;
  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 15px;
  }
`;

const Iframe = styled.iframe`
  height: 1600px;
  width: 600px;
  border: 0;
  @media (max-width: ${props => props.theme.screen.md}) {
    height: 1800px;
    width: 450px;
    padding-bottom: 0;
  }
`;

export default RSVP;