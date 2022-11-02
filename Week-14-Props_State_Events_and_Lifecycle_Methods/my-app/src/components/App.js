import React from "react";
import { Container, Row } from "react-bootstrap";
import Movielist from "./Movielist";
import TitleCard from "./TitleCard";

function App() {
  return (
    <>
      <Container className="d-flex align-items-top justify-content-center">
        <Row>
          <TitleCard />
        </Row>
      </Container>
      <Container
        className="d-flex align-items-top justify-content-center mt-5 "
        id="outter">
        <Row>
          <Movielist />
        </Row>
      </Container>
    </>
  );
}

export default App;
