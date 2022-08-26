import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Image from "react-bootstrap/Image";
import Prof from "../assets/prof.jpg";

const Header = () => {
  return (
    <header className="sticky-top">
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container className="justify-content-between">
          <Image className="prof " src={Prof}></Image>
          <LinkContainer className="m-auto p-2" to="/">
            <Navbar.Brand href="/">Colin Christoph's Portfolio</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fas fa-user"></i>Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
