import React from "react";
import { input, Container } from "react-bootstrap";

// This function will be the radio selector for the stars ratings.
export default function Stars() {
  return (
    <Container>
      <input
        id="star-5"
        type="radio"
        name="rating"
        value="star-5"></input>
      <label
        for="star-5"
        title="5 stars">
        <i
          class="active fa fa-thermometer-full icon-2x"
          aria-hidden="true"></i>
      </label>
      <input
        id="star-4"
        type="radio"
        name="rating"
        value="star-4"></input>
      <label
        for="star-4"
        title="4 stars">
        <i
          class="active fa fa-thermometer-three-quarters icon-2x"
          aria-hidden="true"></i>
      </label>
      <input
        id="star-3"
        type="radio"
        name="rating"
        value="star-3"></input>
      <label
        for="star-3"
        title="3 stars">
        <i
          class="active fa fa-thermometer-half icon-2x"
          aria-hidden="true"></i>
      </label>
      <input
        id="star-2"
        type="radio"
        name="rating"
        value="star-2"></input>
      <label
        for="star-2"
        title="2 stars">
        <i
          class="active fa fa-thermometer-quarter icon-2x"
          aria-hidden="true"></i>
      </label>
      <input
        id="star-1"
        type="radio"
        name="rating"
        value="star-1"></input>
      <label
        for="star-1"
        title="1 star">
        <i
          class="active fa fa-thermometer-empty icon-2x"
          aria-hidden="true"></i>
      </label>
    </Container>
  );
}
