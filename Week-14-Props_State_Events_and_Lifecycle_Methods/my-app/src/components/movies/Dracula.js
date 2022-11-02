import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./movies.css";

export default function Dracula() {
  return (
    <Container className="col-md-6">
      <Card
        className="border border-dark"
        id="cards">
        <Card.Img
          id="images"
          variant="top"
          src="https://flxt.tmsimg.com/assets/p2719_v_v8_aa.jpg"
        />
        <Card.Body>
          <Card.Title>HORROR OF DRACULA</Card.Title>
          <Card.Text>{<h4> 1958, Horror, 1h 22m </h4>}</Card.Text>
          <Card.Text>
            {
              <h6>
                On a search for his missing friend Jonathan Harker (John Van
                Eyssen), vampire hunter Dr. Van Helsing (Peter Cushing) is led
                to Count Dracula's (Christopher Lee) castle. Upon arriving, Van
                Helsing finds an undead Harker in Dracula's crypt and discovers
                that the count's next target is Harker's ailing fiancée, Lucy
                Holmwood (Carol Marsh). With the help of her brother, Arthur
                (Michael Gough), Van Helsing struggles to protect Lucy and put
                an end to Count Dracula's parasitic reign of terror.`
              </h6>
            }
          </Card.Text>
          <Button variant="primary">Post A Review</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
