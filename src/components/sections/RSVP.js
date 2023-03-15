import React from 'react';
import styled from 'styled-components';

import { Section, Container} from '@components/global';

const RSVP = () => (
    <Section id="rsvp">
        <HeaderWrapper>
        <Container>
            <h1>RSVP</h1>
                <center>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeRnAX2UgTBe58EL2GbBQ0Dn5vmXZAhCqMH50IWMhmxtMKOig/viewform?embedded=true" 
            width="600" height="1600" frameborder="0" marginheight="0" marginwidth="0">Chargement en cours…</iframe>
            </center>
        </Container>
        </HeaderWrapper>
    </Section>
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-bottom: 20px;
  padding-top: 20px;
  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 15px;
  }
`;

const Art = styled.figure`
  }
`;

export default RSVP;