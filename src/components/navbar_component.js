import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logoSVG from "../../assets/images/logo.svg";
import Toggler from "../components/layout_component";

const navbar = {
  fontFamily: "Poppins, sans-serif !important",
  paddingTop: "5%",
  paddingBottom: "5%",
  paddingLeft: "0",
  paddingRight: "0",
};

const linkStyle = {
  color: "#1a535c",
  fontFamily: "Poppins, sans-serif !important",
  fontSize: "130%",
};

const NavbarComponent = () => {
  return (
    <Navbar sticky="top" style={navbar}>
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
          <Toggler />
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
