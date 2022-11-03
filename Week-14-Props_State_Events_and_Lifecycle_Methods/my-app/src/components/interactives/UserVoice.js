import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  FormLabel,
  Row,
} from "react-bootstrap";
// import Stars from "./Stars";

//This is the application which takes in and stores the user input. The User, Comments, and stars.
export default function UserVoice() {
  const [setRating] = useState(0);
  function pushRating() {
    let input = 0;
    return [...Array(5)].map((star, name, comment, index) => {
      <div>
        <Container>
          <Row>
            <Col>
              <FormControl>
                <FormLabel>
                  Name:
                  <input
                    type="text"
                    name={""}
                  />
                </FormLabel>
                <FormLabel>
                  Comments:
                  <input
                    type="text"
                    name={""}
                  />
                </FormLabel>

                <Button
                  type="submit"
                  name="submit">
                  Submit
                </Button>
              </FormControl>
            </Col>
          </Row>
        </Container>
      </div>;
    });
  }
} //form, submit,
