import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import yourSVG from "../../assets/images/capi2.png";

const main = {
  fontFamily: "Poppins, sans-serif !important",
};

const bigImage = () => {
  return (
    <Container style={main}>
      <Row>
        <Col sm="12" m="12" l="12">
          <Image src={yourSVG} fluid />
        </Col>
      </Row>
    </Container>
  );
};
export default bigImage;
