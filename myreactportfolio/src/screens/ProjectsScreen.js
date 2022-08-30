import React from "react";
import { Row, Col } from "react-bootstrap";
import Project from "../components/Project";
import projects from "../projects";

const ProjectScreen = () => {
  return (
    <>
      <Row>
        <h2>Projects</h2>
        {projects.map((projects) => (
          <Col key={projects._id} sm={12} md={6} lg={4} xl={4}>
            <Project projects={projects} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProjectScreen;
