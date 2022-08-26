import React from "react";
import { Row, Col } from "react-bootstrap";
import Projects from "../components/Projects";

const HomeScreen = () => {
  return (
    <>
      <h1>Projects</h1>
      <Row>
        {projects.map((projects) => (
          <Col key={projects._id} sm={12} md={6} lg={4} xl={3}>
            <Projects projects={projects} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
