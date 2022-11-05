import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  Col,
  Container,
  FormControl,
  FormLabel,
  Row,
} from "react-bootstrap";
import Stars from "./Stars";

const reviewArray = [];
//This is the application which takes in and stores the user input. The User, Comments, and stars.
export default function UserComment() {
  const [key, setKey] = useState("");
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  // [...Array(1)].map((name, comment) => {})

  function pushAll() {}
  setKey(uuidv4);
  setReview(newRating);
  setName();
  setComment();
  // Setup to push all collected data below to reviewArray[] above.
  // [key, review, name, comment].push(reviewArray)

  return (
    <div>
      <form>
        <Stars />
        <input
          className="name"
          id="name"
          input="text"></input>
        <input
          className="comment"
          id="comment"
          input="comment"></input>
        <button
          className="btn btn-primary"
          onClick={pushAll}>
          Submit
        </button>
      </form>
    </div>
  );
}
