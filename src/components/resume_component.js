import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const bigTitle = {
  fontSize: "200%",
  fontWeight: "bold",
  textAlign: "justify",
};

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
        <Col xs={12} md={12} lg={12}>
          <h5 style={{ textAlign: "justify" }}>
            Soy un Analista Programador de 25 años, nací en Chile y actualmente
            vivo la comuna de Pedro Aguirre Cerda, Santiago. Con más de tres
            años de experiencia laboral, ya he trabajado con empresas de
            distintos tamaños y en diversos rubros, aportando con el entusiasmo
            que me caracteriza e involucrándome en todas las fases del
            desarrollo, implementación y mantención de soluciones tecnológicas.
          </h5>
        </Col>
      </Row>
    </Container>
  );
};
export default ResumeComponent;
