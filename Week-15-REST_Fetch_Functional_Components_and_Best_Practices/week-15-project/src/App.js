import React, { useState, useEffect } from "react";
import { Container, Header } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import NavbarSetup from "./components/NavbarSetup";
import ReservationList from "./components/ReservationList";

export default function App() {
  return (
    <Container>
      <Container className="container-flex">
        <NavbarSetup />
      </Container>
      <ReservationList />
      <Footer />
    </Container>
  );
}
