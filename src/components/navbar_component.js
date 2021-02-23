import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Toggler from "../components/layout_component";

const NavbarComponent = () => {
  return (
    <Navbar sticky="top">
      <Navbar.Toggle />
      <Navbar.Collapse
        className="justify-content-end"
        style={{ paddingRight: "5%" }}
      >
        <Nav.Link>
          <Toggler />
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
