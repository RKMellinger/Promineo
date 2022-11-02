import React from "react";
import { Container, Row } from "react-bootstrap";
import "./css-files/titlecard.css";

export default function TitleCard() {
  return (
    <Container>
      <Row
        className="header"
        style={{ maxWidth: "100vw" }}>
        <h1>Welcome to the Classic Movies Club</h1>
      </Row>
    </Container>
  );
}
