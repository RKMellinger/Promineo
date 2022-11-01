import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'


/* This page contains the information for the nav bar and it's content and set up.
This function houses and creates the function for the navbar that is exported to the viewer when the page is opened.*/
export default function NavbarLink() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Movie Review App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Post Reviews</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Forums</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Movie Resources
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Login</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                New User?
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}