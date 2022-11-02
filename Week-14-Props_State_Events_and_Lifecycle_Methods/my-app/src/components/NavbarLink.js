import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "./flixnet.png";

//This page contains the information for the nav bar and it's content and set up.
// This function houses and creates the function for the navbar that is exported to the viewer when the page is opened.

export default function NavbarLink() {
  return (
    <Navbar
      className="navbar  border border-secondary"
      bg="danger"
      expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img // image file found on the navbar
            alt=""
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-center"
          />{" "}
          FlixNet
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />{" "}
        {/* This is where the various buttong  */}
        <Navbar.Collapse id="basic-navbar-nav">
          {" "}
          {/* and dropdowns are held.*/}
          <Nav className="me-auto">
            <Nav.Link
              className=""
              href="#home">
              Home
            </Nav.Link>
            <Nav.Link href="#link">Movies</Nav.Link>
            <Nav.Link href="#link">Reviews</Nav.Link>
            <Nav.Link href="#link">Members</Nav.Link>
            <NavDropdown
              title="Members Club"
              id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Already a Member? Log In.
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Join our Classic Theater club!
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
