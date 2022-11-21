import React, { getState } from "react";
import { Alert, Row, Container, Col } from "react-bootstrap";
import { Comment_API } from "../api-links/CommentAPI";
import NewComment from "../user-components/NewComment";

export default function Comments() {
  return (
    <div>
      <Container className="container">
        <Row>
          <Alert
            className="container-flex alert-success "
            id="comments-title">
            Welcome to the Comments page.
          </Alert>
        </Row>
        <Container>
          <Container
            className="container-flex bg-info"
            id="comment-table">
            <Row
              className="border border-dark"
              id="comment-header">
              <Col>Name:</Col>
              <Col>Comment/Complaint/Compliment:</Col>
            </Row>
          </Container>
          <br />
          <Container className="container-flex ">
            <NewComment />
          </Container>
        </Container>
      </Container>
    </div>
  );
}
console.log(Comment_API);
