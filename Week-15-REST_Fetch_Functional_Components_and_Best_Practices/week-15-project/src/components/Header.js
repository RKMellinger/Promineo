import React from "react";
import { Container, Navbar } from "react-bootstrap";

export default function Header() {
  //Generic header function
  return (
    <div
      className="container-flex align-items-center justify-content-center"
      id="header">
      <Navbar>
        <div>
          <h1>Notepad</h1>
        </div>
      </Navbar>
    </div>
  );
}
