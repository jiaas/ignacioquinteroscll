import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const bigTitle = {
  fontWeight: "bold",
  fontSize: "380%",
};

const CallToActionComponent = () => {
  return (
    <Container>
      <Row justify="al">
        <Col sm={"12"} md={"12"} lg={"12"} style={{ paddingBottom: "5%" }}>
          <h1 style={bigTitle}>CONSTRUYAMOS JUNTOS EL FUTURO</h1>
          <h3>
            Buscabas un{" "}
            <span style={{ color: "#06a77d" }}> Desarrollador Fullstack</span>?
          </h3>
        </Col>
      </Row>
    </Container>
  );
};
export default CallToActionComponent;
