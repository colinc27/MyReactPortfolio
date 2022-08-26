import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Social from "./Socials";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          {/* <Col className="text-center py-3">Colin's Portfolio</Col> */}
          <Social />
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
