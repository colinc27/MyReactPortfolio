import React from "react";
import { Button, Card } from "react-bootstrap";

const Project = ({ projects }) => {
  return (
    <Card fluid className="my-3 p-3 rounded justify-content-center projcard">
      <Card.Img className="cardimg" src={projects.image} variant="top" />
      <Card.Body>
        <Card.Title as="div">
          <strong className="text-primary">{projects.name}</strong>
        </Card.Title>
        <Card.Text>{projects.description}</Card.Text>
        <div className="d-grid gap-2">
          <Button variant="success" href={projects.gitlink}>
            Github
          </Button>
          {projects.website === "" && (
            <Button disabled variant="danger">
              No Website Available
            </Button>
          )}
          {projects.website !== "" && (
            <Button variant="danger" href={projects.website}>
              Website
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Project;
