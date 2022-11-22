import React from "react";
import { CardGroup, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  const redirectReservations = () => {
    navigate("/Reservations");
  };
  return (
    // Secondary title/header bar for the home page
    <Container
      id="home"
      className="container-flex">
      <div
        className=""
        id="text-header">
        <h1>Welcome to Milliways!</h1>
        <h3>The restaurant at the end of the universe</h3>
      </div>
      <br />
      <Container className="homeCards">
        <CardGroup>
          <Row>
            <Card style={{ width: "30rem", margin: "5px" }}>
              <Card.Img
                className="cardImg"
                variant="top"
                src="https://i0.wp.com/the-avocado.org/wp-content/uploads/2019/09/tumblr_n24i4b3azV1tre0pho1_500.gif?fit=480%2C360&ssl=1"
              />
              <Card.Body>
                <Card.Title>Join us whenever you want!</Card.Title>
                <Card.Text>
                  Our restaurant is enclosed in a vast time bubble and projected
                  forward in time to the precise moment of the End of the
                  Universe. Many said this would be impossible but here we are.
                  Shaped like a giant star, you can find the parking garage,
                  bars, and many of the other facilities in the outter points
                  but you'll want to be front and center in ourmain eating area
                  situated in the domed heart for the spectacular views of the
                  End of the universe!
                </Card.Text>
                <Button
                  href="https://hitchhikers.fandom.com/wiki/Milliways"
                  variant="danger">
                  Don't Panic
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "30rem", margin: "5px" }}>
              <Card.Img
                className="cardImg"
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhlSnjxG1zvmAf6ud1WVo4M_wm_S1b_-d1xA&usqp=CAU"
              />
              <Card.Body>
                <Card.Title>
                  Voted best diner this side of the Big Bang!
                </Card.Title>
                <Card.Text>
                  "If you've done six impossible things this morning, why not
                  round it off with breakfast at Milliways, the Restaurant at
                  the End of the Universe."
                </Card.Text>
                <Button
                  onClick={redirectReservations}
                  variant="primary">
                  Reservations
                </Button>
              </Card.Body>
            </Card>
          </Row>
        </CardGroup>
      </Container>
    </Container>
  );
}
