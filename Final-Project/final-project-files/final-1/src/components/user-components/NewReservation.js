import React, { useState } from "react";
import { Col, Container, Row, Alert, Form, FormLabel } from "react-bootstrap";
import ReservationAPI from "../api-links/ReservationsAPI";

export default function NewReservation() {
  // MockAPI is, _id, name, details [email, quantity, request].
  // NewReservation is a form that takes in name, and details for details array
  // details array is, email, quantity, request and will have a radio button for section selection
  // NewReservation will display a success message if the data is sent successfully.
  // NewReservation will display an error message if the data is not sent successfully.
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
    const res = await reservationAPI.post(reservation);
    const data = await res.json();
    if (data) {
      setSuccess(true);
      setError(false);
    } else {
      setSuccess(false);
      setError(true);
    }
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

  // renders the new reservation form with success and error messages
  return (
    <Container>
      <Row>
        <Col>
          <Alert variant="primary">
            <Alert.Heading>New Reservation</Alert.Heading>
            <Form onSubmit={submitReservation}>
              <Form.Group controlId="formName">
                <FormLabel>Name</FormLabel>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={handleName}
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <FormLabel>Email</FormLabel>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmail}
                />
              </Form.Group>
              <Form.Group controlId="formQuantity">
                <FormLabel>Quantity</FormLabel>
                <Form.Control
                  type="number"
                  placeholder="Enter quantity"
                  value={quantity}
                  onChange={handleQuantity}
                />
              </Form.Group>
              <Form.Group controlId="formRequest">
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
                  label="Main Dining Room"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  value="Main"
                  onChange={handleRadio}
                />
                <Form.Check
                  disabled
                  type="radio"
                  label="Patio"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                  value="Patio"
                  onChange={handleRadio}
                  onSubmit={refreshPage}
                />
              </Form.Group>
              <button type="submit">Submit</button>
            </Form>
            {success && (
              <Alert variant="success">
                <p>Reservation submitted successfully!</p>
              </Alert>
            )}
            {error && (
              <Alert variant="danger">
                <p>Reservation not submitted. Please fill out all fields.</p>
              </Alert>
            )}
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}
