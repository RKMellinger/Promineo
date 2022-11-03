import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Stars from "./Stars";

//This is the application which takes in and stores the user input. The User, Comments, and stars.
export default function UserVoice() {
  return (
    <Container>
      <Row>
        <Col>{/* This is where the user details function will go */}</Col>
      </Row>
      <Container>
        <Stars />
      </Container>
    </Container>
  );
}
