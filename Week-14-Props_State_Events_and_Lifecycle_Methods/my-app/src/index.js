import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Container } from "react-bootstrap";
import NavbarLink from "./Components/NavbarLink";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Container>
      <NavbarLink />
    </Container>
    <Container>
      <App />
    </Container>
  </>
);
