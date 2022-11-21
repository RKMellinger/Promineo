import React from "react";
import { Col, Container, Row, Alert } from "react-bootstrap";
import { ReservationAPI } from "../api-links/ReservationsAPI";
import NewReservation from "../user-components/NewReservation";

export default function Reservations() {
  // Link page to the mockAPI reservations.
  return (
    <div>
      <Container className="container-flex container-md-10">
        <Row>
          <Alert
            className=" alert-success "
            id="reservation-title">
            <Alert.Heading>Welcome to the Reservations page.</Alert.Heading>
            <p>
              As you are no doubt aware, you are free to arrive and be seated at
              anytime. Just remember to come back here and set the reservation
              afterwards, and don't forget to start your payment plan as well!
            </p>
            <hr />
            <p className="mb-0">
              We hope that you enjoyed your meal as we were happy to serve you!
            </p>
          </Alert>
        </Row>

        <Container
          className=" bg-info"
          id="reservation-table">
          <Row
            className="border border-dark"
            id="reservation-header">
            <Col>Party Name</Col>
            <Col># in Party</Col>
            <Col>Seating request:</Col>
          </Row>
        </Container>
        <br />
        <Container className=" ">
          <NewReservation />
        </Container>
      </Container>
    </div>
  );
}
console.log(ReservationAPI);
