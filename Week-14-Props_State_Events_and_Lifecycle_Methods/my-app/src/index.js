import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarLink from "./components/NavbarLink";
import { Container } from "react-bootstrap";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Container>
    <NavbarLink />
    <App />
  </Container>
);

// Boiler plate script from the create-react-app and the links to the associated process created in the other pages.
