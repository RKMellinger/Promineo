import React from "react";
import { Card, Container, Image } from "react-bootstrap";

export default function Home() {
  return (
    // Secondary title/header bar for the home page
    <Container
      id="home"
      className="container-flex">
      <div className="text-header">
        <h1>Welcome to Milliways!</h1>
        <h3>The restaurant at the end of the universe</h3>
      </div>
      {/* Making an inset gif/video card for details about the restaurant maybe have a link to wikipedia?*/}
      <Card
        className="card"
        id="infobox1">
        <img src="https://i0.wp.com/the-avocado.org/wp-content/uploads/2019/09/tumblr_n24i4b3azV1tre0pho1_500.gif?fit=480%2C360&ssl=1" />
      </Card>
    </Container>
  );
}
