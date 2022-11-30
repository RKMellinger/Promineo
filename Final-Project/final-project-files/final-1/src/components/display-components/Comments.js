import React, { useEffect, useState } from "react";
import { Alert, Row, Container, Col, Table, Button } from "react-bootstrap";
import CommentAPI from "../api-links/CommentAPI";
import NewComment from "../user-components/NewComment";

export default function Comments() {
  //API data = id, name, comment
  //Comments are displayed in a list.
  //function to get api data from CommentAPI functions
  const [comments, setComments] = useState([]);
  const commentAPI = CommentAPI();

  // Get comments from api updates new comments
  useEffect(() => {
    const getComments = async () => {
      const commentsFromServer = await commentAPI.get();
      setComments(commentsFromServer);
    };
    getComments();
  }, []);

  //function to delete comment from api
  const deleteComment = async (id) => {
    await commentAPI.delete(id);
    setComments(comments.filter((comment) => comment.id !== id));
  };

  // function to add new comment to api and update comments table from NewComment component
  const addComment = async (comment) => {
    const data = await commentAPI.post(comment);
    const commentsFromServer = await commentAPI.get();
    // const data = await res.json();
    setComments(commentsFromServer);
  };

  //renders the comments table with scroll bar and updates with new comment submission
  return (
    <Container>
      <Row>
        <Col>
          <Alert variant="primary">
            <Alert.Heading>Comments</Alert.Heading>
            <Table
              striped
              bordered
              hover
              size="sm">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Comment</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {comments.map((comment) => (
                  <tr key={comment.id}>
                    <td>{comment.name}</td>
                    <td>{comment.comment}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => deleteComment(comment.id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col>
          <NewComment
            onClick={addComment}
            setComments={setComments}
            comments={comments}
          />
        </Col>
      </Row>
    </Container>
  );
}
