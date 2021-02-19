import React from "react";
import { Card, CardDeck, Container } from "react-bootstrap";

const title = {
  fontFamily: "Poppins, sans-serif !important",
  fontSize: "150%",
  paddingTop: "2%",
  paddingBottom: "2%",
  textDecorationLine: "underline",
};
const CardDeckComponent = () => {
  return (
    <CardDeck style={{ paddingBottom: "5%" }}>
      <Container>
        <center>
          <h1 style={title}>Últimos posts</h1>
        </center>
      </Container>

      <Card>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title style={{ fontWeight: "bold" }}>
            Una historia: ¿Por qué construí este sitio web?
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title style={{ fontWeight: "bold" }}>
            Un consejo: Lo perfecto es enemigo de lo bueno.
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title style={{ fontWeight: "bold" }}>
            Un pensamiento: El arte de aprender a aprender.
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};

export default CardDeckComponent;
