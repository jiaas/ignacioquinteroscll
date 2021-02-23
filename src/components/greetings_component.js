import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const bigTitle = {
  fontWeight: "bold",
  fontSize: "380%",
};

const jumbotron = {
  paddingBottom: "5%",
};

const GreetingsComponent = () => {
  return (
    <Container>
      <Row>
        <Col sm={"12"} md={"12"} lg={"12"} style={jumbotron}>
          <h1 style={bigTitle}>Primero que nada, buenas noches.</h1>
          <h3>
            Buscabas un{" "}
            <span style={{ color: "#06a77d" }}> Desarrollador Fullstack</span>?
          </h3>
        </Col>
      </Row>
    </Container>
  );
};
export default GreetingsComponent;
