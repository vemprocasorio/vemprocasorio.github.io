import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
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
    anchor: '#about',
  },
  {
    name: 'Presentes',
    anchor: '#presentes',
  },
  {
    name: 'Cerimônia e Festa',
    anchor: 'festa',
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
        <h1>Ana Carolina &amp; Gustavo</h1>
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

export default Navbar;