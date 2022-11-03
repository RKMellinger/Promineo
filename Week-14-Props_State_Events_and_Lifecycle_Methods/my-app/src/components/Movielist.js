import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./css-files/user.css";
import "./css-files/movielist.css";
// import Stars from "./interactives/Stars";
// import Dracula from "./movies/Dracula";
// import Howard from "./movies/Howard";
// import Mummy from "./movies/Mummy";
import Santa from "./movies/Santa";

export default class Movielist extends Component {
  render() {
    return (
      <Container className="align-items-top justify-content-center">
        <div className="body ">
          <h2>Classic B Movies</h2>
        </div>
        <Santa />
      </Container>
    );
  }
}

{
  /* <Col className="col-md-2"></Col>
<Container className="col-md-5"><Howard /></Container><Row>
<Col
  className="col-md-12"
  id="spacer"></Col>
</Row>
<Row>
<Container className="col-md-5">
  <Mummy />
</Container>
<Col className="col-md-2"></Col>
<Container className="col-md-5">
  <Dracula />
</Container>
</Row> */
}
