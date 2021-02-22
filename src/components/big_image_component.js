import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import yourSVG from "../../assets/images/capi2.png";
import dog from "../../assets/images/dog.svg";
import park from "../../assets/images/park.svg";

const main = {
  fontFamily: "Poppins, sans-serif !important",
  padding: 0,
  margin: 0,
};

const bigTitle = {
  fontSize: "200%",
  fontWeight: "bold",
};

const bigImage = () => {
  return (
    <Container style={main}>
      <Row>
        <Col xs={12} md={6} lg={6} style={{ paddingTop: "3%" }}>
          <Col>
            <h2 style={bigTitle}>Soporte técnico y capacitación de usuarios</h2>
          </Col>
          <Col>
            <h4>
              From powerful websites with modern designs to animated
              award-winning developments, the possibilities are endless. We
              deploy the best technologies for the job, from highly configurable
              Wordpress sites to blazing fast JAMstack applications.
            </h4>
          </Col>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <center>
            <Image src={dog} fluid />
          </center>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={6} lg={6}>
          <center>
            <Image src={dog} fluid />
          </center>
        </Col>
        <Col xs={12} md={6} lg={6} style={{ paddingTop: "3%" }}>
          <Col>
            <h2 style={bigTitle}>
              Mantención, mejora y optimización de código
            </h2>
          </Col>
          <Col>
            <h4>
              From powerful websites with modern designs to animated
              award-winning developments, the possibilities are endless. We
              deploy the best technologies for the job, from highly configurable
              Wordpress sites to blazing fast JAMstack applications.
            </h4>
          </Col>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={6} lg={6} style={{ paddingTop: "3%" }}>
          <Col>
            <h2 style={bigTitle}>Diseño de Productos Tecnológicos (UI, UX)</h2>
          </Col>
          <Col>
            <h4>
              From powerful websites with modern designs to animated
              award-winning developments, the possibilities are endless. We
              deploy the best technologies for the job, from highly configurable
              Wordpress sites to blazing fast JAMstack applications.
            </h4>
          </Col>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <center>
            <Image src={dog} fluid />
          </center>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={6} lg={6}>
          <center>
            <Image src={dog} fluid />
          </center>
        </Col>
        <Col xs={12} md={6} lg={6} style={{ paddingTop: "3%" }}>
          <Col>
            <h2 style={bigTitle}>
              Desarrollo Fullstack de Aplicaciones Multiplataforma
            </h2>
          </Col>
          <Col>
            <h4>
              From powerful websites with modern designs to animated
              award-winning developments, the possibilities are endless. We
              deploy the best technologies for the job, from highly configurable
              Wordpress sites to blazing fast JAMstack applications.
            </h4>
          </Col>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={6} lg={6} style={{ paddingTop: "3%" }}>
          <Col>
            <h2 style={bigTitle}>Coordinador de Equipos de Desarrollo</h2>
          </Col>
          <Col>
            <h4>
              From powerful websites with modern designs to animated
              award-winning developments, the possibilities are endless. We
              deploy the best technologies for the job, from highly configurable
              Wordpress sites to blazing fast JAMstack applications.
            </h4>
          </Col>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <center>
            <Image src={dog} fluid />
          </center>
        </Col>
      </Row>
    </Container>
  );
};
export default bigImage;
