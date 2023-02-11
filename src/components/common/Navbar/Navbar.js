import React, { Component } from 'react';
import styled from 'styled-components';
import ExternalLink from '@common/ExternalLink';
import {
  Nav,
  Brand,
  StyledContainer,
  NavListWrapper,
} from './style';

import MailIcon from '@static/icons/mail.svg';
import TwitterIcon from '@static/icons/twitter.svg';
import MediumIcon from '@static/icons/medium.svg';
import LinkedinIcon from '@static/icons/linkedin.svg'
import InstagramIcon from '@static/icons/instagram.svg';

const SOCIAL = [
];


class Navbar extends Component {
  state = {
    mobileMenuOpen: false,
  };

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }));
  };

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false });
    }
  };

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
    <StyledContainer>
        {SOCIAL.map(({ icon, link }) => (
            <SocialIcons>
               <ExternalLink href={link}>
                 <img src={icon} alt="link" />
               </ExternalLink>
               </SocialIcons>
             ))}
      </StyledContainer>
      
    </NavListWrapper>
  );

  render() {
    const { mobileMenuOpen } = this.state;

    return (
      <Nav {...this.props}>
        
        <StyledContainer>
          <Grid>
          <h1>Ana Carolina &amp; Gustavo</h1>
          {this.getNavList({})}
          </Grid>
        </StyledContainer>
      </Nav>
    );
  }
}

const Grid = styled.div`
  display: grid;
  margin-top: 14px;
`;

const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 16px 8px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 16px;
  }
`;

export default Navbar;
