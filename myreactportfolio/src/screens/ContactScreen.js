import React from "react";
import { Button, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Contact() {
  return (
    <>
      <Form>
        {" "}
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1" controlId="formBasicEmail">
            Name
          </InputGroup.Text>
          <Form.Control
            placeholder="John Doe"
            aria-label="Name"
            aria-describedby="basic-addon1"
            type="email"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
          <Form.Control
            placeholder="youremail@example.com"
            aria-label="Email"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Subject</InputGroup.Text>
          <Form.Control aria-label="text" />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text>Message</InputGroup.Text>
          <Form.Control as="textarea" aria-label="With textarea" />
        </InputGroup>
        <InputGroup className="d-grid gap-2 py-2">
          <div className="d-grid gap-2">
            <Button variant="success" type="submit">
              Submit
            </Button>
          </div>
        </InputGroup>
      </Form>
    </>
  );
}

export default Contact;
