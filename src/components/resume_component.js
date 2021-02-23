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
};

const ResumeComponent = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={12} lg={12} style={{ paddingTop: "3%" }}>
          <Card style={{ fontWeight: "bold", color: "#1a535c" }}>
            <Card.Body>
              <Row>
                <Col xs={12} md={3} lg={3} style={{ paddingTop: "3%" }}>
                  <Card style={{ fontWeight: "bold", color: "#1a535c" }}>
                    <Card.Body>
                      <Row>
                        <Col xs={12} md={12} lg={12}>
                          <center style={fancyText}>
                            <Image
                              src={avatarSVG}
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
                            <h6>Javier Ignacio</h6>
                            <h6>Quinteros Carvajal</h6>

                            <Badge
                              style={{
                                backgroundColor: "#f1a208",
                                color: "#f7fff7",
                              }}
                            >
                              Desarrollador Fullstack
                            </Badge>
                            <Row>
                              <Col
                                xs={4}
                                md={4}
                                lg={4}
                                style={{ paddingTop: "5%" }}
                              >
                                <FontAwesomeIcon icon={faLinkedin} />
                              </Col>
                              <Col
                                xs={4}
                                md={4}
                                lg={4}
                                style={{ paddingTop: "5%" }}
                              >
                                <FontAwesomeIcon icon={faGithub} />
                              </Col>
                              <Col
                                xs={4}
                                md={4}
                                lg={4}
                                style={{ paddingTop: "5%" }}
                              >
                                <FontAwesomeIcon icon={faTwitter} />
                              </Col>
                            </Row>
                            <h6>
                              <FontAwesomeIcon icon={faCalendar} /> 10 de
                              Octubre, 1995
                            </h6>
                            <h6>
                              <FontAwesomeIcon icon={faMapPin} /> Santiago,
                              Chile.
                            </h6>
                            <h6>
                              <FontAwesomeIcon icon={faEnvelope} />{" "}
                              javier@nora.cl
                            </h6>
                          </center>
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
