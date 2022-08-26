import React from "react";
import { Container, Header, Grid } from "semantic-ui-react";
import { Page, Document } from "react-pdf";
import Resume from "../assets/Resume_ColinChristoph.pdf";

const Pdf = () => {
  return (
    <Container fluid>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={8}>
            <Header className="header" as="h1">
              Résumé
            </Header>
            <Document file={Resume}>
              <Page pageNumber={1} />
            </Document>
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};
export default Pdf;
