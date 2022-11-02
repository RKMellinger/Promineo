import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./movies.css";

export default function Howard() {
  return (
    <Container className="col-md-6">
      <Card
        className="border border-dark"
        id="cards">
        <Card.Img
          id="images"
          variant="top"
          src="https://flxt.tmsimg.com/assets/p9432_p_v10_ac.jpg"
        />
        <Card.Body>
          <Card.Title>HOWARD THE DUCK</Card.Title>
          <Card.Text>{<h4>PG 1986, Sci-fi/Action, 1h 51m</h4>}</Card.Text>
          <Card.Text>
            {
              <h6>
                In this film based on the comic book character, Howard the Duck
                is suddenly beamed from Duckworld, a planet of intelligent ducks
                with arms and legs, to Earth, where he lands in Cleveland. There
                he saves rocker Beverly (Lea Thompson) from thugs and forms a
                friendship with her. She introduces him to Phil (Tim Robbins),
                who works at a lab with scientist Dr. Jenning (Jeffrey Jones).
                When the doctor attempts to return Howard to his world, Jenning
                instead transfers an evil spirit into his own body.
              </h6>
            }
          </Card.Text>
          <Button variant="primary">Post A Review</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
