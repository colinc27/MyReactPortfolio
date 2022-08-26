import React from "react";
import { Row, Col } from "react-bootstrap";
import Pdf from "../components/Pdf";
import Project from "../components/Project";
import projects from "../projects";

const HomeScreen = () => {
  return (
    <>
      <h1>Projects</h1>
      <Pdf />
      <Row>
        {projects.map((projects) => (
          <Col key={projects._id} sm={12} md={6} lg={4} xl={4}>
            <Project projects={projects} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
