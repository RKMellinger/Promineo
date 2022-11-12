import React from "react";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";

export default function NavbarSetup() {
  return (
    <div>
      <Navbar bg="secondary">
        <Container className="container-flex">
          <NavbarBrand href="#"></NavbarBrand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Features">Features</Nav.Link>
            <Nav.Link href="#Stufff">Stuff</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
