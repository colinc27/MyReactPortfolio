import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const Project = ({ projects }) => {
  return (
    <Card fluid className="my-3 p-3 rounded justify-content-center projcard">
      <Card.Img className="cardimg" src={projects.image} variant="top" />
      <Card.Body>
        <Card.Title as="div">
          <strong className="text-primary">{projects.name}</strong>
        </Card.Title>
        <Card.Text>{projects.description}</Card.Text>
        <Row className="cardbtn position-static bottom-0">
          <Col>
            <Button className="btn-success" href={projects.gitlink}>
              Github
            </Button>
          </Col>
          <Col>
            {projects.website === "" && (
              <h5 className="text-center text-danger">No Website Available</h5>
            )}
            {projects.website !== "" && (
              <Button className="btn-warning" href={projects.website}>
                Website
              </Button>
            )}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Project;
