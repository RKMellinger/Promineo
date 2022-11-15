import React from "react";
import { Container, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <div
      className="container-flex align-items-center "
      id="header">
      <Navbar
        bg="dark"
        variant="dark">
        <div>
          <h1>Notepad</h1>
        </div>
      </Navbar>
    </div>
  );
}
