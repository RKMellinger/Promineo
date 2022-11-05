import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  Form,
  Button,
} from "react-bootstrap";
import logo from "./flixnet.png";

//This page contains the information for the nav bar and it's content and set up.
// This function houses and creates the navbar that is exported to the viewer when the page is opened.

export default function NavbarLink() {
  return (
    <span>
      <Navbar
        id="nav"
        key={uuidv4}
        bg="secondary"
        expand={"md"}
        className="navbar">
        <Navbar.Brand href="#">
          <img // image file found on the navbar
            alt=""
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-center"
          />
          FlixNet
        </Navbar.Brand>
        <Nav className="justify-content-start flex-grow-1 pe-3">
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">New Releases</Nav.Link>
          <Nav.Link href="#action3">Members Club</Nav.Link>
          <NavDropdown
            title="Explore The Generes"
            id={`offcanvasNavbarDropdown-expand-"md"`}>
            <NavDropdown.Item href="#action4">
              Action/Adventure
            </NavDropdown.Item>
            <NavDropdown.Item href="#action5">Animation</NavDropdown.Item>
            <NavDropdown.Item href="#action6">Classics</NavDropdown.Item>
            <NavDropdown.Item href="#action7">Comedy</NavDropdown.Item>
            <NavDropdown.Item href="#action8">Drama</NavDropdown.Item>
            <NavDropdown.Item href="#action9">Fantasy</NavDropdown.Item>
            <NavDropdown.Item href="#action10">
              History/Documentary
            </NavDropdown.Item>
            <NavDropdown.Item href="#action11">Martial Arts</NavDropdown.Item>
            <NavDropdown.Item href="#action12">Romance</NavDropdown.Item>
            <NavDropdown.Item href="#action13">
              Science fiction
            </NavDropdown.Item>
            <NavDropdown.Item href="#action14">
              Thriller/Mystery
            </NavDropdown.Item>
            <NavDropdown.Item href="#action15">Western</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action16">Surprize me!</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </span>
  );
}
