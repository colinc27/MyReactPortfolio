import Accordion from "react-bootstrap/Accordion";

function Experience() {
  return (
    <>
      <h2>Experience</h2>
      <Accordion>
        <Accordion.Item eventKey="0" className="bg-primary">
          <Accordion.Header>
            Presidents Club Closing Specialist
          </Accordion.Header>
          <Accordion.Body>
            <ol class="text-left">
              <h6>Rocket Mortgage | November 2020 - June 2022 </h6>
              <li>
                Coordinated with sellers, buyers, escrow agents and real estate
                agents to complete loan submissions and scheduled closing dates
              </li>
              <li>
                Balanced closing disclosures, fixed post-closing issues, and
                completed some UW tasks
              </li>
              <li>
                Produced and submitted completed loan packages to title and
                escrow professionals.
              </li>
              <li>
                Leveraged this experience to develop my communication, business,
                and sales skills
              </li>
              <li>
                Constantly received achieves/exceeds expectations in monthly
                review and was promoted twice for excellent communication skills
                and being a subject matter expert to our team.
              </li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="bg-primary">
          <Accordion.Header>
            Manufacturing / Production Engineer
          </Accordion.Header>
          <Accordion.Body>
            <ol class="text-left">
              <h6>
                Swiss Precision Machining | September 2018 - November 2020
              </h6>
              <li>
                Identified problems and specific resolutions to fix defective,
                damaged or malfunctioning parts, assemblies, equipment and
                systems.
              </li>
              <li>
                Selected manufacturing methods, fabrication and operations to
                develop and coordinate production.
              </li>
              <li>
                Managed the 3D printing design team and was the best engineering
                resource for Solidworks and ESPRIT
              </li>
              <li>
                Created 100's of programs sometimes 50K lines of code long
              </li>
              <li>
                Managed manufacturing projects and program services to handle
                engineering and project metrics.
              </li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="bg-primary">
          <Accordion.Header>Technical Marketing Engineer</Accordion.Header>
          <Accordion.Body>
            <ol class="text-left">
              <h6> Wieland Metals| June 2018 - September 2018</h6>
              <li>
                Provided technical expertise to customers looking to design a
                new product
              </li>
              <li>
                Wrote documents and created presentations sharing technical
                details of products, technologies and solutions.
              </li>
              <li>Created engineering drawings for new customer products</li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default Experience;
