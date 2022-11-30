import React, { useState } from "react";
import { Col, Container, Row, Alert, Form, FormLabel } from "react-bootstrap";
import ReservationAPI from "../api-links/ReservationsAPI";

export default function NewReservation(props) {
  console.log(props);
  // MockAPI is, id, name, email, quantity, request.
  // NewReservation is a form that takes in id, name, email, quantity, request.
  // NewReservation button will submit data to the Reservation component and the ReservationsAPI component.

  const [name, setName] = useState("");
  const [email, setEmail] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [request, setRequest] = useState([]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // function to submit reservation data to api
  const submitReservation = async (e) => {
    e.preventDefault();
    const reservation = { name, email, quantity, request };
    const reservationAPI = ReservationAPI();
    const data = await reservationAPI.post(reservation);
    // const data = await res.json();
    if (data) {
      setSuccess(true);
      setError(false);
    } else {
      setSuccess(false);
      setError(true);
    }
    const reservationsFromServer = await reservationAPI.get();
    props.setReservations(reservationsFromServer);
  };

  // function to submit radio buttons details to state.request
  const handleRadio = (e) => {
    setRequest(e.target.value);
  };

  // function to submit input details to state.name
  const handleName = (e) => {
    setName(e.target.value);
  };

  // function to submit input details to state.email
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // function to submit input details to state.quantity
  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  // renders the new reservation form with name, email, quantity, and request inputs
  // renders the submit button
  return (
    <Container>
      <Row>
        <Col>
          <Form
            onSubmit={submitReservation}
            id="resForm">
            <Row id="top-row">
              <Col>
                <FormLabel>Name</FormLabel>
                <Form.Control
                  id="top-row-bits"
                  className="sm-6"
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={handleName}
                />
              </Col>
              <Col>
                <FormLabel>Number of Guests</FormLabel>
                <Form.Control
                  id="top-row"
                  className="sm-4"
                  type="number"
                  placeholder="Enter Number of Guests"
                  value={quantity}
                  onChange={handleQuantity}
                />
              </Col>
            </Row>
            <Row id="middle-row">
              <FormLabel>Email</FormLabel>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmail}
              />
            </Row>
            <Row id="bottom-row">
              <Container
                className="border border-dark rounded"
                id="request-box">
                <FormLabel>Request</FormLabel>
                <Form.Check
                  type="radio"
                  label="Bar"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  value="Bar"
                  onChange={handleRadio}
                />
                <Form.Check
                  type="radio"
                  label="Main Dining"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  value="Main Dining"
                  onChange={handleRadio}
                />
                <Form.Check
                  type="radio"
                  label="Private Dining"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                  value="Private Dining"
                  onChange={handleRadio}
                />
                <Form.Check
                  disabled
                  type="radio"
                  label="Patio"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios4"
                  value="Patio"
                  onChange={handleRadio}
                />
              </Container>
              <button
                id="submit-btn"
                type="submit"
                className="btn btn-primary justify-right">
                Submit
              </button>
            </Row>
          </Form>
          {success && (
            <Alert
              variant="success"
              dismissible>
              <Alert.Heading>Reservation Sucessful!</Alert.Heading>
              <p>
                Thank you for your reservation. We hope you enjoyed your visit.
              </p>
            </Alert>
          )}
          {error && (
            <Alert
              variant="danger"
              onClose={() => setError(false)}
              dismissible>
              <Alert.Heading>Reservation Failed!</Alert.Heading>
              <p>
                We do not have a record of your visit. Please come in and speak
                to the host to be seated.
              </p>
            </Alert>
          )}
          <Container id="padding"></Container>
        </Col>
      </Row>
    </Container>
  );
}
