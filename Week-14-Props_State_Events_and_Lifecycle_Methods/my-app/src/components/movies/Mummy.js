import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "../css-files/movies.css";

export default function Mummy() {
  return (
    // <Container className="col-md-5">
    <Card
      className="border border-dark"
      id="cards">
      <Card.Img
        id="images"
        variant="top"
        src="https://flxt.tmsimg.com/assets/p2489_p_v8_aa.jpg"
      />
      <Card.Body>
        <Card.Title>
          <h4>THE MUMMY</h4>
        </Card.Title>
        <Card.Text>{<h4>1959, Horror, 1h 28m</h4>}</Card.Text>
        <Card.Text>
          {
            <h6>
              In the 1890s a team of British archaeologists discover the
              untouched tomb of Princess Ananka but accidentally bring the
              mummified body of her High Priest back to life. Three years later
              back in England a follower of the same Egyptian religion unleashes
              the mummy to exact grisly revenge on the despoilers of the sacred
              past.
            </h6>
          }
        </Card.Text>
        <Button variant="primary">Post A Review</Button>
      </Card.Body>
    </Card>
    // </Container>
  );
}
