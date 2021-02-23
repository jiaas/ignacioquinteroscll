import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

const CardDeckComponent = () => {
  return (
    <Container>
      <Row>
        <Col
          xs={12}
          md={12}
          lg={12}
          style={{ paddingTop: "3%", textDecoration: "underline" }}
        >
          <h6>ÚLTIMOS POSTS</h6>
        </Col>
        <CardDeck style={{ paddingBottom: "5%" }}>
          <Col xs={12} md={4} lg={4} style={{ paddingTop: "3%" }}>
            <Card>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold", color: "#1a535c" }}>
                  Una historia: ¿Por qué construí este sitio web?
                </Card.Title>
                <Card.Text style={{ color: "#1a535c" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={4} style={{ paddingTop: "3%" }}>
            <Card style={{ fontWeight: "bold", color: "#1a535c" }}>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold" }}>
                  Un consejo: Lo perfecto es enemigo de lo bueno.
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={4} style={{ paddingTop: "3%" }}>
            <Card style={{ fontWeight: "bold", color: "#1a535c" }}>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold" }}>
                  Un pensamiento: El arte de aprender a aprender.
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </CardDeck>
      </Row>
    </Container>
  );
};

export default CardDeckComponent;
