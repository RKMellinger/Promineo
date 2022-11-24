import React, { useState } from "react";
import { Col, Container, Row, Alert, Form, FormLabel } from "react-bootstrap";

export default function NewReservation() {
  // MockAPI is, _id, name, details [email, quantity, request].
  // NewReservation is a form that takes in name, and details for details array
  // details array is, email, quantity, request and will have a radio button for section selection
  // NewReservation will display a success message if the data is sent successfully.
  // NewReservation will display an error message if the data is not sent successfully.
  // NewReservation button will submit data to the Reservation component and the ReservationsAPI component.

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    quantity: "",
    request: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const { name, email, quantity, request } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name && email && quantity && request) {
      setSuccess(true);
    } else {
      setError(true);
    }
  };
  // function controling radio button selection "Bar, Main Dining, or Outside" on submit
  const [selectedValue, setSelectedValue] = useState("Bar");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  // render new reservation form with radio button selection

  return (
    <Container className="bg-secondary rounded text-white p-3">
      <Row>
        <Col>
          <h1 className="text-center">New Reservation</h1>
          <Form onSubmit={(e) => onSubmit(e)}>
            <Form.Group controlId="formBasicName">
              <FormLabel>Name for the Reservation?</FormLabel>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                value={name}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <FormLabel>Contact Email:</FormLabel>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicQuantity">
              <FormLabel>How many were in your party?</FormLabel>
              <Form.Control
                type="number"
                placeholder="Enter a number"
                name="quantity"
                value={quantity}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicSection">
              <FormLabel>Please select your seating area.</FormLabel>
              <Form.Check
                type="radio"
                label="Bar"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
                value="Bar"
                checked={selectedValue === "Bar"}
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="Main Dining"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
                value="Main Dining"
                checked={selectedValue === "Main Dining"}
                onChange={handleChange}
              />
              <Form.Check
                disabled
                type="radio"
                label="Outside"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
                value="Outside"
                checked={selectedValue === "Outside"}
                onChange={handleChange}
              />
            </Form.Group>
            <button
              type="submit"
              className="btn btn-primary">
              Submit
            </button>
          </Form>
          {success && (
            <Alert variant="success">
              <Alert.Heading>Success!</Alert.Heading>
              <p>
                Your reservation has been submitted. We thank you for your visit
                and hope to see you again soon.
              </p>
            </Alert>
          )}
          {error && (
            <Alert variant="danger">
              <Alert.Heading>Error!</Alert.Heading>
              <p>Please fill out all fields to submit your reservation..</p>
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
}
