import React, { useState } from "react";
import { Container } from "react-bootstrap";

// This function will be the radio selector htmlFor="he stars ratings.
export default function Stars() {
  const [rating, pushRating] = useState(0);

  function pushRating(event) {
    console.log("Push Rating", event.target.value);
    return event.target.value;
  }
  return (
    <Container onClick={pushRating}>
      <input
        id="star-5"
        type="radio"
        name="rating"
        value="5"></input>
      <label
        htmlFor="star-5"
        title="5 stars">
        <i
          className="active fa fa-thermometer-full icon-2x"
          aria-hidden="true"></i>
      </label>
      <input
        id="star-4"
        type="radio"
        name="rating"
        value="4"></input>
      <label
        htmlFor="star-4"
        title="4 stars">
        <i
          className="active fa fa-thermometer-three-quarters icon-2x"
          aria-hidden="true"></i>
      </label>
      <input
        id="star-3"
        type="radio"
        name="rating"
        value="3"></input>
      <label
        htmlFor="star-3"
        title="3 stars">
        <i
          className="active fa fa-thermometer-half icon-2x"
          aria-hidden="true"></i>
      </label>
      <input
        id="star-2"
        type="radio"
        name="rating"
        value="2"></input>
      <label
        htmlFor="star-2"
        title="2 stars">
        <i
          className="active fa fa-thermometer-quarter icon-2x"
          aria-hidden="true"></i>
      </label>
      <input
        id="star-1"
        type="radio"
        name="rating"
        value="star-1"></input>
      <label
        htmlFor="star-1"
        title="1">
        <i
          className="active fa fa-thermometer-empty icon-2x"
          aria-hidden="true"></i>
      </label>
    </Container>
  );
  {
  }
}
