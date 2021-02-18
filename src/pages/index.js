import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "../components/navbar_component";
import { Container, Row, Col } from "react-bootstrap";
import CardDeckComponent from "../components/card_deck_component";

const main = {
  fontFamily: "Poppins, sans-serif !important",
};

const bigTitle = {
  fontWeight: "bold",
  fontSize: "333%",
};

const secondaryText = {
  color: "#575a4b !important",
};

const jumbotron = {
  backgroundColor: "white !important",
  paddingBottom: "5%",
};

const index = () => {
  return (
    <Container style={main}>
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
