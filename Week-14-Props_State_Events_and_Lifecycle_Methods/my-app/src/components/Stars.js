import ReactStars from "react-stars";
import React from "react";
import { render } from "react-dom";

export default function Stars() {
  const ratingChanged = (newRating) => {
    return newRating;
  };

  render(
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      color2={"#ffd700"}
    />,

    document.getElementById("where-to-render")
  );
}
