import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logo from './Milliways.png'

{/* This page contains the information for the nav bar and it's content and set up. */}

{/* This function houses and creates the function for the navbar that is exported to the viewer when the page is opened.*/}
export default function NavbarLink() {
  return (
    <Navbar className='navbar border border-secondary rounded' bg="light" expand="lg">
      <Container>
      <Navbar.Brand href="#home">
            <img // image file found on the navbar
              alt=""
              src={logo}  
              width="50"
              height="50"
              className="d-inline-block align-center"
            />{' '}
            Milliways
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* This is where the various buttong  */}
        <Navbar.Collapse id="basic-navbar-nav">                 {/* and dropdowns are held.*/}
          <Nav className="me-auto">
            <Nav.Link className='' href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Menu</Nav.Link>
            <Nav.Link href="#link">Reservations</Nav.Link>
            <Nav.Link href="#link">Comments</Nav.Link>
                <NavDropdown title="Diners Club" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Already a Member? Log In.</NavDropdown.Item>
                <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">Join our Frequent diners club!</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
