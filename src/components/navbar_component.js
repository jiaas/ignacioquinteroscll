import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const navbar = {
  fontFamily: "Poppins, sans-serif !important",
  paddingTop: "5%",
  paddingBottom: "5%",
  paddingLeft: "0",
  paddingRight: "0",
};

const NavbarComponent = () => {
  return (
    <Navbar style={navbar}>
      <Navbar.Brand href="#home">ignacioquinteros.cl</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#home">Blog</Nav.Link>
        <Nav.Link href="#home">Contacto</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
