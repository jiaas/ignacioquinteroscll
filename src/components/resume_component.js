import React from "react";
import { Container, Row, Col, Image, Card, Badge } from "react-bootstrap";
import avatarSVG from "../../assets/images/avatar.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faEnvelope,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const fancyText = {
  color: "#06a77d",
  border: "0",
};

const ResumeComponent = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={12} lg={12} style={{ paddingTop: "3%" }}>
          <Card
            style={{
              fontWeight: "bold",
              color: "#1a535c",
              border: "0",
            }}
          >
            <Card.Body>
              <Row>
                <Col xs={12} md={3} lg={3} style={{ paddingTop: "3%" }}>
                  <Card style={fancyText}>
                    <Card.Body>
                      <Row>
                        <Col xs={12} md={12} lg={12}>
                          <Image
                            src={avatarSVG}
                            fluid
                            width="250"
                            height="250"
                            style={{ padding: "5%" }}
                          />
                          <h5 style={fancyText}>Javier Ignacio</h5>
                          <h5 style={fancyText}>Quinteros Carvajal</h5>

                          <Badge
                            style={{
                              backgroundColor: "#f1a208",
                              color: "#f7fff7",
                              padding: "3%",
                            }}
                          >
                            <h6
                              style={{
                                paddingTop: "3%",
                              }}
                            >
                              Desarrollador Fullstack
                            </h6>
                          </Badge>
                          <Row
                            style={{ paddingTop: "5%", paddingBottom: "5%" }}
                          >
                            <Col xs={2} md={2} lg={2}>
                              <FontAwesomeIcon icon={faCalendar} />
                            </Col>
                            <Col xs={10} md={10} lg={10}>
                              <h6>10 de Octubre, 1995</h6>
                            </Col>
                          </Row>
                          <Row>
                            <Col xs={2} md={2} lg={2}>
                              <FontAwesomeIcon icon={faMapPin} />
                            </Col>
                            <Col xs={10} md={10} lg={10}>
                              <h6>Santiago, Chile.</h6>
                            </Col>
                          </Row>
                          <Row>
                            <Col xs={2} md={2} lg={2}>
                              <FontAwesomeIcon icon={faEnvelope} />{" "}
                            </Col>
                            <Col xs={10} md={10} lg={10}>
                              <h6>javier@nora.cl</h6>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "3%", paddingBottom: "3%" }}>
                        <Col>
                          <FontAwesomeIcon icon={faLinkedin} />
                        </Col>
                        <Col>
                          <FontAwesomeIcon icon={faGithub} />
                        </Col>
                        <Col>
                          <FontAwesomeIcon icon={faTwitter} />
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={9} lg={9} style={{ paddingTop: "3%" }}>
                  <Col xs={12} md={12} lg={12}>
                    <h3>About Me</h3>
                    <p>
                      Soy un Analista Programador de 25 años, nací en Chile y
                      actualmente vivo la comuna de Pedro Aguirre Cerda,
                      Santiago.
                    </p>
                  </Col>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default ResumeComponent;
