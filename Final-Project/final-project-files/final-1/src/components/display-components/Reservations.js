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
  Modal,
} from "react-bootstrap";
import ReservationAPI from "../api-links/ReservationsAPI";
import NewReservation from "../user-components/NewReservation";

export default function Reservations() {
  // API data = name, data, quantity, request, id
  // Reservations are displayed in a list.
  // states to store api data from ReservationAPI functions
  const [reservations, setReservations] = useState([]);
  const reservationAPI = ReservationAPI();

  // Get reservation data from api and updates on newReservation onSubmit
  useEffect(() => {
    const getReservations = async () => {
      const reservationsFromServer = await reservationAPI.get();
      setReservations(reservationsFromServer);
    };
    getReservations();
  }, []);

  // function to delete reservation from api
  const deleteReservation = async (id) => {
    await reservationAPI.delete(id);
    setReservations(
      reservations.filter((reservation) => reservation.id !== id)
    );
  };

  // function to update reservation from api
  const updateReservation = async (id) => {
    await reservationAPI.update(id);
    setReservations(
      reservations.filter((reservation) => reservation.id !== id)
    );
  };

  // edits the reservation with a modal prompt for name, email, quantity, and request then updates the reservation
  const editReservation = (id) => {
    const reservation = reservations.find(
      (reservation) => reservation.id === id
    );
    const name = prompt("Name", reservation.name);
    const email = prompt("Email", reservation.email);
    const quantity = prompt("Quantity", reservation.quantity);
    const request = prompt("Request", reservation.request);
    if (name && email && quantity && request) {
      updateReservation(id, { name, email, quantity, request });
    }
  };

  // renders the reservations list with delete and edit buttons
  // renders the new reservation form
  // renders scrollbar for pa
  return (
    <Container>
      <Row>
        <Col>
          <h1>Reservations</h1>
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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation) => (
                <tr key={reservation.id}>
                  <td>{reservation.name}</td>
                  <td>{reservation.email}</td>
                  <td>{reservation.quantity}</td>
                  <td>{reservation.request}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => deleteReservation(reservation.id)}>
                      Delete
                    </Button>
                    <Button
                      variant="warning"
                      onClick={() => editReservation(reservation.id)}>
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col>
          <NewReservation />
        </Col>
      </Row>
    </Container>
  );
}
