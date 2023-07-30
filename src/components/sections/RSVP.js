import React from 'react';
import styled from 'styled-components';

import { Section, Container} from '@components/global';

const RSVP = () => (
    <Section id="rsvp">
        <HeaderWrapper>
        <Container>
            <h1>RSVP</h1>
            <h3>Confirme sua presença através do <a href="https://forms.gle/vkgfRRnsnmTEJBibA">formulário</a>.</h3>
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