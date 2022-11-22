import React from "react";
import { Alert, Row, Container, Col } from "react-bootstrap";

export default function NewComment() {
  // MockAPI is, _id, name, comment.
  return (
    <Row
      className="border border-dark"
      id="comment-header">
      <Col>Sammy</Col>
      <Col>Heavy Metal</Col>
    </Row>
  );
}
