import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./movies.css";

export default function Santa() {
  return (
    <Container className="col-md-6">
      <Card
        className="border border-dark"
        id="cards">
        <Card.Img
          id="images"
          variant="top"
          src="https://flxt.tmsimg.com/assets/p4232_p_v8_aa.jpg"
        />
        <Card.Body>
          <Card.Title>
            <h4>SANTA CLAUS CONQUERS THE MARTIANS</h4>
          </Card.Title>
          <Card.Text>{<h4>1964, Holiday/Sci-fi, 1h 20m</h4>}</Card.Text>
          <Card.Text>
            {
              <h6>
                Martian ruler Kimar (Leonard Hicks) is upset that the children
                of Mars are lazy and under the influence of too much pop culture
                from Earth. They are obsessed with the planet's television
                programs and don't want to do much of anything. In an attempt to
                get the kids peppy again, Kimar orders the kidnapping of Santa
                Claus (John Call), hoping that the jolly old toymaker will know
                how to cheer the children up again. But two Earth children are
                also nabbed, and this complicates things for Kimar.
              </h6>
            }
          </Card.Text>
          <Button variant="primary">Post A Review</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
