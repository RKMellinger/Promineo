import React, { useState, useEffect } from "react";
import { Container, Header } from "react-bootstrap";
import Footer from "./components/Footer";
import NavbarSetup from "./components/NavbarSetup";
import ReservationCard from "./components/ReservationCard";

export default function App() {
  return (
    <Container>
      <Container className="container-flex md-12">
        <NavbarSetup />
      </Container>
      <ReservationCard />
      <Footer />
    </Container>
  );
}
