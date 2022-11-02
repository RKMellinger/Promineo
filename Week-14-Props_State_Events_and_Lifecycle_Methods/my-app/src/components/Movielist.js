import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./css-files/movielist.css";
import Dracula from "./movies/Dracula";
import Howard from "./movies/Howard";
import Mummy from "./movies/Mummy";
import Santa from "./movies/Santa";

export default class Movielist extends Component {
  render() {
    return (
      <Container className="align-items-top justify-content-center">
        <div className="body ">
          <h2>Classic Movies</h2>
        </div>
        <Row>
          <Santa />

          <Howard />
        </Row>
        <Row>
          <Col
            className="col-md-12"
            id="spacer"></Col>
        </Row>
        <Row>
          <Mummy />

          <Dracula />
        </Row>
      </Container>
    );
  }
}
