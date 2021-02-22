import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import dogSVG from "../../assets/images/dog.svg";
import callSVG from "../../assets/images/call.svg";
import shotSVG from "../../assets/images/shot.svg";
import videoSVG from "../../assets/images/video.svg";
import selfieSVG from "../../assets/images/selfie.svg";

const main = {
  fontFamily: "Poppins, sans-serif !important",
  padding: 0,
  margin: 0,
};

const bigTitle = {
  fontSize: "200%",
  fontWeight: "bold",
  paddingBottom: "5%",
  textAlign: "justify",
};

const bigImage = () => {
  return (
    <Container style={main}>
      <Row style={{ verticalAlign: "middle", alignItems: "center" }}>
        <Col xs={12} md={6} lg={6}>
          <Col>
            <h3 style={bigTitle}>Soporte técnico y capacitación de usuarios</h3>
          </Col>
          <Col>
            <h5 style={{ textAlign: "justify" }}>
              From powerful websites with modern designs to animated
              award-winning developments, the possibilities are endless. We
              deploy the best technologies for the job, from highly configurable
              Wordpress sites to blazing fast JAMstack applications.
            </h5>
          </Col>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Image
            src={dogSVG}
            fluid
            width="80%"
            height="80%"
            style={{
              paddingLeft: "10%",
              paddingRight: "10%",
              paddingTop: "5%",
              paddingBottom: "5%",
            }}
          />
        </Col>
      </Row>

      <Row style={{ verticalAlign: "middle", alignItems: "center" }}>
        <Col xs={12} md={6} lg={6}>
          <Image
            src={callSVG}
            fluid
            width="80%"
            height="80%"
            style={{
              paddingLeft: "10%",
              paddingRight: "10%",
              paddingTop: "5%",
              paddingBottom: "5%",
            }}
          />
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Col>
            <h3 style={bigTitle}>
              Mantención, mejora y optimización de código
            </h3>
          </Col>
          <Col>
            <h5 style={{ textAlign: "justify" }}>
              From powerful websites with modern designs to animated
              award-winning developments, the possibilities are endless. We
              deploy the best technologies for the job, from highly configurable
              Wordpress sites to blazing fast JAMstack applications.
            </h5>
          </Col>
        </Col>
      </Row>

      <Row style={{ verticalAlign: "middle", alignItems: "center" }}>
        <Col xs={12} md={6} lg={6}>
          <Col>
            <h3 style={bigTitle}>Diseño de Productos Tecnológicos (UI, UX)</h3>
          </Col>
          <Col>
            <h5 style={{ textAlign: "justify" }}>
              From powerful websites with modern designs to animated
              award-winning developments, the possibilities are endless. We
              deploy the best technologies for the job, from highly configurable
              Wordpress sites to blazing fast JAMstack applications.
            </h5>
          </Col>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Image
            src={shotSVG}
            fluid
            width="80%"
            height="80%"
            style={{
              paddingLeft: "10%",
              paddingRight: "10%",
              paddingTop: "5%",
              paddingBottom: "5%",
            }}
          />
        </Col>
      </Row>

      <Row style={{ verticalAlign: "middle", alignItems: "center" }}>
        <Col xs={12} md={6} lg={6}>
          <Image
            src={videoSVG}
            fluid
            width="80%"
            height="80%"
            style={{
              paddingLeft: "10%",
              paddingRight: "10%",
              paddingTop: "5%",
              paddingBottom: "5%",
            }}
          />
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Col>
            <h3 style={bigTitle}>
              Desarrollo Fullstack de Aplicaciones Multiplataforma
            </h3>
          </Col>
          <Col>
            <h5 style={{ textAlign: "justify" }}>
              From powerful websites with modern designs to animated
              award-winning developments, the possibilities are endless. We
              deploy the best technologies for the job, from highly configurable
              Wordpress sites to blazing fast JAMstack applications.
            </h5>
          </Col>
        </Col>
      </Row>

      <Row style={{ verticalAlign: "middle", alignItems: "center" }}>
        <Col xs={12} md={6} lg={6}>
          <Col>
            <h3 style={bigTitle}>Coordinador de Equipos de Desarrollo</h3>
          </Col>
          <Col>
            <h5 style={{ textAlign: "justify" }}>
              From powerful websites with modern designs to animated
              award-winning developments, the possibilities are endless. We
              deploy the best technologies for the job, from highly configurable
              Wordpress sites to blazing fast JAMstack applications.
            </h5>
          </Col>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Image
            src={selfieSVG}
            fluid
            width="80%"
            height="80%"
            style={{
              paddingLeft: "10%",
              paddingRight: "10%",
              paddingTop: "5%",
              paddingBottom: "5%",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default bigImage;
