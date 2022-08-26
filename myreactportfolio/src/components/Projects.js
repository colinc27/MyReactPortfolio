import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Product = ({ projects }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/projects/${projects._id}`}>
        <Card.Img src={projects.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/projects/${projects._id}`}>
          <Card.Title as="div">
            <strong>{projects.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="h3">${projects.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
