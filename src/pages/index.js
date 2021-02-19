import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "../components/navbar_component";
import { Container, Row, Col } from "react-bootstrap";
import CardDeckComponent from "../components/card_deck_component";
import { Helmet } from "react-helmet";

const main = {
  fontFamily: "Poppins, sans-serif !important",
};

const bigTitle = {
  color: "#031927",
  fontWeight: "bold",
  fontSize: "380%",
};

const secondaryText = {
  color: "#596475 !important",
};

const jumbotron = {
  paddingBottom: "7%",
  paddingTop: "7%",
};

const index = () => {
  return (
    <Container style={main}>
      <Helmet>
        {/* inline style elements */}
        <style type="text/css">{`
        body {
            //background-color: #031927;
        }
      }`}</style>
      </Helmet>
      <NavbarComponent></NavbarComponent>
      <Row>
        <Col sm="12" m="12" l="12" style={jumbotron}>
          <h1 style={bigTitle}>Primero que nada, buenas noches.</h1>
          <h3 style={secondaryText}>Buscabas un Desarrollador Fullstack?</h3>
        </Col>
        <Col sm="12" m="12" l="12">
          <CardDeckComponent></CardDeckComponent>
        </Col>
      </Row>
    </Container>
  );
};
export default index;
