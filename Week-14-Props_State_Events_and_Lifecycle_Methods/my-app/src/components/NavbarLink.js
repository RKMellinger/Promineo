import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import logo from "./flixnet.png";

//This page contains the information for the nav bar and it's content and set up.
// This function houses and creates the function for the navbar that is exported to the viewer when the page is opened.

export default function NavbarLink() {
  return (
    <>
      <span>
        {["md"].map((expand) => (
          <Navbar
            id="navbarMain"
            key={expand}
            bg="light"
            expand={expand}
            fixed="top"
            className="mb-3">
            <Container fluid>
              <Navbar.Brand href="#home">
                <img // image file found on the navbar
                  alt=""
                  src={logo}
                  width="50"
                  height="50"
                  className="d-inline-block align-center"
                />
                FlixNet
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`} //Last point of tinkering...
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Home
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Movies</Nav.Link>
                    <Nav.Link href="#action2">Reviews</Nav.Link>
                    <NavDropdown
                      title="Members Club"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}>
                      <NavDropdown.Item href="#action3">
                        Already a Member? Log In.
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action4">
                        Join our Classic Theater club!
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </span>
    </>
  );
}
