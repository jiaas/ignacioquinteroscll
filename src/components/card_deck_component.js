import React from "react";
import { Card, CardDeck, Button } from "react-bootstrap";

const CardDeckComponent = () => {
  return (
    <CardDeck>
      <Card>
        <Card.Img variant="top" src="./assets/images/placeholder.svg" />
        <Card.Body>
          <Card.Title style={{ fontWeight: "bold" }}>
            Una historia: ¿Por qué construí este sitio web?
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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
  );
};

export default CardDeckComponent;
