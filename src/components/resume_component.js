import React from "react";
import { Container, Row, Col, Image, Card, Badge } from "react-bootstrap";
import dogSVG from "../../assets/images/capi2.png";

const box = {
  backgroundColor: "white",
  paddingTop: "5%",
  paddingBottom: "5%",
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
                          <center>
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
                            <h6>Javier Ignacio</h6>
                            <h6>Quinteros Carvajal</h6>

                            <Badge variant="secondary">
                              Desarrollador Fullstack
                            </Badge>
                            <Row>
                              <Col xs={4} md={4} lg={4}>
                                <p>icono 1</p>
                              </Col>
                              <Col xs={4} md={4} lg={4}>
                                <p>icono 2</p>
                              </Col>
                              <Col xs={4} md={4} lg={4}>
                                <p>icono 2</p>
                              </Col>
                            </Row>
                            <h3>Calendario</h3>
                            <h3>Ciudad</h3>
                            <h3>correo</h3>
                          </center>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={9} lg={9} style={{ paddingTop: "3%" }}>
                  <Col xs={12} md={12} lg={12}>
                    <h3>About Me</h3>
                    <p>Lorem Ipsum</p>
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
