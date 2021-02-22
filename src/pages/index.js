import React from "react";
import "../utils/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "../components/navbar_component";
import { Container, Row, Col } from "react-bootstrap";
import CardDeckComponent from "../components/card_deck_component";

import Layout from "../components/layout_component";

import BigImage from "../components/big_image_component";
import FooterComponent from "../components/footer_component";

const main = {
  fontFamily: "Poppins, sans-serif !important",
  backgroundColor: "var(--bg)",
  color: "var(--textNormal)",
  transition: "color 0.2s ease-out, background 0.2s ease-out",
};

const bigTitle = {
  fontWeight: "bold",
  fontSize: "380%",
};

const jumbotron = {
  paddingBottom: "5%",
  paddingTop: "5%",
};

const index = () => {
  return (
    <Container style={main}>
      <Row>
        <Col sm={"12"} md={"12"} lg={"12"}>
          <NavbarComponent></NavbarComponent>
        </Col>
      </Row>
      <Row>
        <Col sm={"12"} md={"12"} lg={"12"} style={jumbotron}>
          <h1 style={bigTitle}>Primero que nada, buenas noches.</h1>
          <h3>Buscabas un Desarrollador Fullstack?</h3>
        </Col>
        <Col sm={"12"} md={"12"} lg={"12"}>
          <CardDeckComponent></CardDeckComponent>
        </Col>
        <Col>
          <BigImage></BigImage>
        </Col>
      </Row>
      <Row>
        <Col>
          <FooterComponent></FooterComponent>
        </Col>
      </Row>
    </Container>
  );
};
export default index;
