import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Alert,
  Form,
  Button,
  DropdownButton,
  Dropdown,
  Table,
} from "react-bootstrap";
import { ReservationAPI } from "../api-links/ReservationsAPI";
import NewReservation from "../user-components/NewReservation";

export default function Reservations() {
  // Link page to the mockAPI reservations.
  // MockAPI is, _id, name, details [email, qty, request].
  const [resID, setResID] = useState();
  const [resName, setResName] = useState();
  const [resData, setPageData] = useState([]);

  // const handleNewReservation = (event) => {
  //   setResName(event.newName.name);
  //   setPageData([{ email, quantity, request }]);
  // };

  return (
    <div>
      <Container className="">
        <Container>
          <Row>
            <Alert
              className=" alert-success "
              id="reservation-title">
              <Alert.Heading>Welcome to the Reservations page.</Alert.Heading>
              <p>
                As you are no doubt aware, you are free to arrive and be seated
                at anytime. Just remember to come back here and set the
                reservation afterwards, and don't forget to start your payment
                plan as well!
              </p>
              <hr />
              <p className="mb-0">
                We hope that you enjoyed your meal as we were happy to serve
                you!
              </p>
            </Alert>
          </Row>
          <Row>
            <Form
              className="bg-secondary rounded"
              id="resForm">
              <Form.Group
                className="mb-3"
                id="resForm"
                controlId="formBasicName">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="name"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail">
                <Form.Label>Contact E-mail</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicQuantity">
                <Form.Label># of guests?</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="#"
                />
              </Form.Group>
              <DropdownButton
                variant="outline-secondary"
                title="Seating Request"
                id="input-group-dropdown-1">
                <Dropdown.Item href="#">Veranda</Dropdown.Item>
                <Dropdown.Item href="#">Bar</Dropdown.Item>
                <Dropdown.Item href="#">Showroom</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  href="#"
                  className="disabled">
                  Patio
                </Dropdown.Item>
              </DropdownButton>
              <Button
                // onClick={handleNewReservation}
                variant="primary"
                type="submit">
                Submit
              </Button>
              <br />
              <br />
            </Form>
          </Row>
        </Container>
        <Container
          className=" bg-dark rounded"
          id="reservation-table">
          <Row className="reservations-title">Current Reservations</Row>
          <Row
            className="border border-dark"
            id="reservation-header">
            <Col>Party Name</Col>
            <Col># in Party</Col>
            <Col>Contact Email</Col>
            <Col>Seating request:</Col>
          </Row>
          <Container
            className="striped bordered hover"
            id="newReservationTable">
            <NewReservation />
          </Container>
        </Container>
      </Container>
    </div>
  );
}
console.log(ReservationAPI);
