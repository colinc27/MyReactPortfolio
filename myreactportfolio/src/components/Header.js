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
          <LinkContainer className="m-auto p-2" to="/cjcreactportfolio">
            <Navbar.Brand href="/MyReactPortfolio/">
              Colin Christoph's Portfolio
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/MyReactPortfolio/projects">
                <Nav.Link>
                  <i className="fa-solid fa-diagram-project px-1"></i>Projects
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/MyReactPortfolio/experience">
                <Nav.Link>
                  <i className="fa-solid fa-book px-1"></i>Experience and Skills
                </Nav.Link>
              </LinkContainer>
              {/* <LinkContainer to="/MyReactPortfolio/contact">
                <Nav.Link>
                  <i className="fas fa-user px-1"></i>Contact Me
                </Nav.Link>
              </LinkContainer> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
