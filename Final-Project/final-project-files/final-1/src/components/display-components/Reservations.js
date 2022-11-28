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

  //using newReservation onSubmit refresh page to get new data from API
  const refreshPage = () => {
    window.location.reload(false);
  };

  // function to add new reservation to api and update reservations table from NewReservation component
  const addReservation = async (reservation) => {
    const res = await reservationAPI.post(reservation);
    const data = await res.json();
    setReservations([...reservations, data]);
  };
  // edits the reservation
  const editReservation = async (reservation) => {
    const res = await reservationAPI.put(reservation);
    const data = await res.json();
    setReservations([...reservations, data]);
  };

  // renders the reservations table with scroll bar and updates with new reservation submission
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
                  <th>Number of Guests</th>
                  <th>Request</th>
                  <th>Delete</th>
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
                        size="sm"
                        onClick={() => deleteReservation(reservation.id)}>
                        Cancel
                      </Button>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => editReservation(reservation.id)}>
                        Edit
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
          <NewReservation
            onSubmit={refreshPage}
            onAdd={addReservation}
          />
        </Col>
      </Row>
    </Container>
  );
}
