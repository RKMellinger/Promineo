import React from "react";
import { Card, Container } from "react-bootstrap";
import "../css-files/movies.css";
import Movielist from "../Movielist";
import Stars from "../interactives/Stars";
// import UserVoice from "../interactives/UserVoice";

let santaReview = [];

export default function Santa() {
  return (
    <Card
      className="border border-dark align-items-center"
      id="cards">
      <Card.Img
        id="images"
        variant="top"
        src="https://flxt.tmsimg.com/assets/p4232_p_v8_aa.jpg"
      />
      <Card.Body>
        <Card.Title>SANTA CLAUS CONQUERS THE MARTIANS</Card.Title>
        <Card.Text>1964, Holiday/Sci-fi, 1h 20m</Card.Text>
        <Card.Text>
          Martian ruler Kimar (Leonard Hicks) is upset that the children of Mars
          are lazy and under the influence of too much pop culture from Earth.
          They are obsessed with the planet's television programs and don't want
          to do much of anything. In an attempt to get the kids peppy again,
          Kimar orders the kidnapping of Santa Claus (John Call), hoping that
          the jolly old toymaker will know how to cheer the children up again.
          But two Earth children are also nabbed, and this complicates things
          for Kimar.
        </Card.Text>
        {/* <UserVoice /> */}
        {[...Array(1)].map((star, index) => {
          index += 1;
          return (
            <Container key={index}>
              <Stars santaReview={santaReview} />
            </Container>
          );
        })}
      </Card.Body>
    </Card>
  );
}
