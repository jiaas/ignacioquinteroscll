import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ResumeComponent = () => {
  return (
    <Container>
      <Row
        style={{
          verticalAlign: "middle",
          alignItems: "center",
          paddingTop: "5%",
          paddingBottom: "5%",
        }}
      >
        <Col xs={12} md={12} lg={12} style={{ paddingTop: "5%" }}>
          <Col xs={12} md={12} lg={12}>
            <h1>Javier Ignacio</h1>
            <h1>Quinteros Carvajal</h1>
          </Col>
          <Col xs={6} md={6} lg={6}>
            <h5>Edad: 25 años</h5>
            <h5>País de Origen: Chile</h5>
          </Col>
          <Col xs={6} md={6} lg={6}>
            <h5>Edad: 25 años</h5>
            <h5>País de Origen: Chile</h5>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};
export default ResumeComponent;
