import React from "react";
import { Card, CardDeck } from "react-bootstrap";

const CardDeckComponent = () => {
  return (
    <CardDeck style={{ paddingBottom: "5%" }}>
      <Card>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title style={{ fontWeight: "bold", color: "#1a535c" }}>
            Una historia: ¿Por qué construí este sitio web?
          </Card.Title>
          <Card.Text style={{ color: "#1a535c" }}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ fontWeight: "bold", color: "#1a535c" }}>
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
      <Card style={{ fontWeight: "bold", color: "#1a535c" }}>
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
