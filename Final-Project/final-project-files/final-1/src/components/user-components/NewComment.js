import React, { useState } from "react";
import {
  Alert,
  Row,
  Container,
  Col,
  Form,
  Button,
  FormLabel,
} from "react-bootstrap";
import CommentAPI from "../api-links/CommentAPI";

export default function NewComment() {
  // MockAPI is, id, name, comment.
  // Create a form with name and comment inputs and a submit button linked to the Comments component.

  // Create state for name and comment
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  // Create state for error message
  const [error, setError] = useState("");

  // Create state for success message
  const [success, setSuccess] = useState("");

  // Create state for commentAPI
  const commentAPI = CommentAPI();

  // Create function to handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || comment === "") {
      setError("Please enter a name and comment");
    } else {
      const newComment = {
        name: name,
        comment: comment,
      };
      await commentAPI.post(newComment);
      setSuccess("Comment Added");
      setName("");
      setComment("");
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Alert variant="primary">
            <Alert.Heading>Add Comment</Alert.Heading>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <FormLabel>Name</FormLabel>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <FormLabel>Comment</FormLabel>
                <Form.Control
                  type="text"
                  placeholder="Enter Comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </Form.Group>
              <Button
                onSubmit={handleSubmit}
                variant="primary"
                type="submit">
                Submit
              </Button>
            </Form>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}
