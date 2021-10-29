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
  {
    icon: MailIcon,
    link: 'mailto:gustavo@padovan.org',
  },
  {
    icon: TwitterIcon,
    link: 'https://twitter.com/guspadovan',
  },
  {
    icon: MediumIcon,
    link: 'https://medium.com/@gusp',
  },
  {
    icon: LinkedinIcon,
    link: 'https://www.linkedin.com/in/guspadovan/',
  },
  {
    icon: InstagramIcon,
    link: 'https://instagram.com/guspadovan',
  },
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
          {this.getNavList({})}
        </StyledContainer>
      </Nav>
    );
  }
}

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
