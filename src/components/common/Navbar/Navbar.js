import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { Container } from '@components/global';
import {
  Nav,
  NavItem,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
} from './style';

import { ReactComponent as MenuIcon } from '@static/icons/menu.svg';

const NAV = [
  {
    name: 'Home',
    anchor: '#top',
  },
  {
    name: 'Cerimônia e Festa',
    anchor: '#festa',
  },
  {
    name: 'Presentes',
    anchor: '#presentes',
  },
  {
    name: 'RSVP',
    anchor: '#rsvp',
  },
  {
    name: 'Hospedagem',
    anchor: '#hospedagem',
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
      <Scrollspy
        items={NAV.map(({ name }) => name.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV.map(({ name, anchor }) => (
          <NavItem key={name}>
            <Link to={anchor} onClick={this.closeMobileMenu}>
              {name}
            </Link>
          </NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  );

  render() {
    const { mobileMenuOpen } = this.state;

    return (
      <Nav {...this.props}>
        <StyledContainer>
        <Text><h1>Ana Carolina &amp; Gustavo</h1></Text>
        
          <Mobile>
            <button onClick={this.toggleMobileMenu}  style={{ color: 'black' }}>
              <MenuIcon />
            </button>
          </Mobile>

          <Mobile hide>{this.getNavList({})}</Mobile>
        </StyledContainer>
        <Mobile>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList({ mobile: true })}</Container>
            </MobileMenu>
          )}
        </Mobile>
      </Nav>
    );
  }
}

const Text = styled.div`
  margin-top: 14px;
`;

export default Navbar;