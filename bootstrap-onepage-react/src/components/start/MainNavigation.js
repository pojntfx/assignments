import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { ContactModal } from "./ContactModal";

export class MainNavigation extends Component {
  state = {
    navbarIsOpen: false
  };
  toggle = () => {
    this.setState({
      navbarIsOpen: !this.state.navbarIsOpen
    });
  };
  render() {
    const { toggle } = this;
    const { title } = this.props;
    const { navbarIsOpen } = this.state;

    return (
      <Navbar color="primary" dark expand="sm" className="sticky-top">
        <NavbarBrand href="/">{title}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={navbarIsOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#who-we-are">Who we are</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#what-we-do">What we do</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#our-customers">Our customers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#showcase">Showcase</NavLink>
            </NavItem>
            <NavItem>
              <ContactModal buttonLabel="Contact us" />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
