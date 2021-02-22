import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logoSVG from "../../assets/images/logo.svg";

const navbar = {
  fontFamily: "Poppins, sans-serif !important",
  paddingTop: "5%",
  paddingBottom: "5%",
  paddingLeft: "0",
  paddingRight: "0",
};

const linkStyle = {
  color: "#031927",
  fontFamily: "Poppins, sans-serif !important",
  fontSize: "150%",
};

const NavbarComponent = () => {
  return (
    <Navbar style={navbar}>
      <Navbar.Brand href="#home">
        <img
          src={logoSVG}
          alt="React Bootstrap logo"
          width="100"
          height="100"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link href="#home" style={linkStyle}>
          Inicio
        </Nav.Link>
        <Nav.Link href="#home" style={linkStyle}>
          Blog
        </Nav.Link>
        <Nav.Link href="#home" style={linkStyle}>
          Contacto
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
