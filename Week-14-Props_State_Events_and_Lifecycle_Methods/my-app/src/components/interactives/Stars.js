import React, { useState } from "react";
import { Container } from "react-bootstrap";

// This function will be the radio selector htmlFor="he stars ratings.
export default function Stars() {
  const [rating, setRating] = useState(0);
  const [newComment, setNewComment] = useState("");
  // let input = 0;

  //   if (input.value === "5") {
  //     star = 5;
  //   } else if (input.value === "4") {
  //     star = 4;
  //   } else if (input.value === "3") {
  //     star = 3;
  //   } else if (input.value === "2") {
  //     star = 2;
  //   } else {
  //     star = 1;
  //   }
  function pushRating(event) {
    console.log("Push Rating", event.target.value);
  }
  return (
    <Container>
      {[...Array(1)].map((star, index) => {
        index += 1;
        return (
          <Container
            key={index}
            onClick={pushRating}>
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
              value="4"
              // key={index + 4}
            ></input>
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
              value="3"
              // key={index + 3}
            ></input>
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
              value="2"
              // key={index + 2}
            ></input>
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
              value="star-1"
              // key={index + 1}
            ></input>
            <label
              htmlFor="star-1"
              title="1">
              <i
                className="active fa fa-thermometer-empty icon-2x"
                aria-hidden="true"></i>
            </label>
          </Container>
        );
      })}
    </Container>
  );
}
//   );
// }
