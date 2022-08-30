import React from "react";
import { Container, Row } from "react-bootstrap";
import Social from "./Socials";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Social />
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
