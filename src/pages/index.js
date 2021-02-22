import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "../components/navbar_component";
import { Container, Row, Col } from "react-bootstrap";
import CardDeckComponent from "../components/card_deck_component";
import { Helmet } from "react-helmet";
import BigImage from "../components/big_image_component";

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
  paddingBottom: "5%",
  paddingTop: "7%",
};

const index = () => {
  return (
    <Container style={main}>
      <Helmet>
        <style type="text/css">
          {`
        body {background-color: #FFFFFF;}}`}
        </style>
      </Helmet>
      <NavbarComponent></NavbarComponent>
      <Row>
        <Col sm={"12"} md={"12"} lg={"12"} style={jumbotron}>
          <h1 style={bigTitle}>Primero que nada, buenas noches.</h1>
          <h3 style={secondaryText}>Buscabas un Desarrollador Fullstack?</h3>
        </Col>
        <Col sm={"12"} md={"12"} lg={"12"}>
          <CardDeckComponent></CardDeckComponent>
        </Col>
        <Col>
          <BigImage></BigImage>
        </Col>
      </Row>
    </Container>
  );
};
export default index;
