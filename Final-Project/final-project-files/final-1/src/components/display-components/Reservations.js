import React, { useEffect, useState } from "react";
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
import ReservationAPI from "../api-links/ReservationsAPI";
import NewReservation from "../user-components/NewReservation";

export default function Reservations() {
  const [name, setName] = useState("");
  const [details, setDetails] = useState([]);
  const [reservations, setReservations] = useState([]);
  const reservationAPI = ReservationAPI();
  //using the ReservationAPI function to get the data from the api
  // ReservationAPI function is in the api-links folder
  // ReservationAPI data is id, name, details [email, quantity, request]
  // Use NewReservation component to create new post
  // Reservations are displayed in a table.

  // Get reservations from api updates new reservations
  useEffect(() => {
    const getReservations = async () => {
      const reservationsFromServer = await reservationAPI.get();
      setReservations(reservationsFromServer);
    };
    getReservations();
  }, []);

  //function to delete reservation from api
  const deleteReservation = async (id) => {
    await reservationAPI.delete(id);
    setReservations(
      reservations.filter((reservation) => reservation.id !== id)
    );
  };

  // function to add new reservation to api and update reservations table from NewReservation component
  const addReservation = async (reservation) => {
    const res = await reservationAPI.post(reservation);
    const data = await res.json();
    setReservations([...reservations, data]);
  };

  //renders the reservations table with scroll bar and updates with new reservation submission
  return (
    <Container>
      <Row>
        <Col>
          <Alert variant="primary">
            <Alert.Heading>Reservations</Alert.Heading>
            <Table
              striped
              bordered
              hover
              size="sm">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Quantity</th>
                  <th>Request</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((reservation) => (
                  <tr key={reservation.id}>
                    <td>{reservation.name}</td>
                    <td>{reservation.details.email}</td>
                    <td>{reservation.details.quantity}</td>
                    <td>{reservation.details.request}</td>
                    <td>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => deleteReservation(reservation.id)}>
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
          <NewReservation onAdd={addReservation} />
        </Col>
      </Row>
    </Container>
  );
}
