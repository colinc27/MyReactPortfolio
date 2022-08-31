import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import skill from "../skill";

const Experience = () => {
  return (
    <div className="py-2">
      <h2>Skills</h2>

      <Accordion>
        <Accordion.Item eventKey="0" className="">
          <Accordion.Header>Software Development</Accordion.Header>
          <Accordion.Body>
            <ul className="nodots">
              <strong>
                {skill.map((skill) => {
                  if (skill.type === "software") {
                    return (
                      <li className="py-2">
                        <Container>
                          <Row>
                            <Col xs lg="2">
                              <i className={skill.svg}></i>
                              {skill.name}
                            </Col>
                            <Col xs lg="8" md="auto">
                              <ProgressBar
                                className=""
                                label={`${skill.yearsExp} Year exp.`}
                                now={skill.yearsExp}
                                min={0}
                                max={3}
                              />
                            </Col>
                          </Row>
                        </Container>
                      </li>
                    );
                  }
                  return null;
                })}
              </strong>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="">
          <Accordion.Header>Engineering</Accordion.Header>
          <Accordion.Body>
            <ul className="nodots">
              <strong>
                {skill.map((skill) => {
                  if (skill.type === "engineering") {
                    return (
                      <li className="py-2">
                        <Container>
                          <Row>
                            <Col xs lg="2">
                              <i className={skill.svg}></i>
                              {skill.name}
                            </Col>
                            <Col xs lg="8" md="auto">
                              <ProgressBar
                                className=""
                                label={`${skill.yearsExp} Year exp.`}
                                now={skill.yearsExp}
                                min={0}
                                max={3}
                              />
                            </Col>
                          </Row>
                        </Container>
                      </li>
                    );
                  }
                  return null;
                })}
              </strong>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="">
          <Accordion.Header>General</Accordion.Header>
          <Accordion.Body>
            <ul className="nodots">
              <strong>
                {skill.map((skill) => {
                  if (skill.type === "general") {
                    return (
                      <li className="py-2">
                        <Container>
                          <Row>
                            <Col xs lg="2">
                              <i className={skill.svg}></i>
                              {skill.name}
                            </Col>
                            <Col xs lg="8" md="auto">
                              <ProgressBar
                                className=""
                                label={`${skill.yearsExp} Year exp.`}
                                now={skill.yearsExp}
                                min={0}
                                max={3}
                              />
                            </Col>
                          </Row>
                        </Container>
                      </li>
                    );
                  }
                  return null;
                })}
              </strong>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Experience;
