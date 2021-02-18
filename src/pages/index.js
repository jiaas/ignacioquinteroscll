import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, CardDeck, Button } from "react-bootstrap";

const main = {
  fontFamily: "Poppins, sans-serif !important",
};

const bigTitle = {
  fontWeight: "bold",
  fontSize: "300%",
};

const jumbotron = {
  backgroundColor: "white !important",
  paddingTop: "10%",
  paddingBottom: "5%",
};

const index = () => {
  return (
    <Container style={main}>
      <Row>
        <Col sm="12" m="12" l="12">
          <center style={jumbotron}>
            <h1 style={bigTitle}>Primero que nada, buenas noches.</h1>
            <h3>Buscabas un Desarrollador Fullstack?</h3>
          </center>
        </Col>
        <Col sm="12" m="12" l="12">
          <CardDeck>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold" }}>
                  Una historia: ¿Por qué construí este sitio web?
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <center>
                  <Button variant="dark" size="lg" block>
                    Te invito a leer este post
                  </Button>
                </center>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold" }}>
                  Un consejo: Lo perfecto es enemigo de lo bueno.
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <center>
                  <Button variant="dark" size="lg" block>
                    Te invito a leer este post
                  </Button>
                </center>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold" }}>
                  Lo que aprendí: El arte de aprender a aprender.
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <center>
                  <Button variant="dark" size="lg" block>
                    Te invito a leer este post
                  </Button>
                </center>
              </Card.Footer>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </Container>
  );
};
export default index;
