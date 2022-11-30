import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button, Table } from "react-bootstrap";
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
  const updateReservation = async (id, reservation) => {
    console.log("line 32", id);
    await reservationAPI.update(id, reservation);
    const reservationsFromServer = await reservationAPI.get();
    setReservations(reservationsFromServer);
  };

  // edits the reservation with a prompt for name, email, quantity, and request then updates the reservation
  const editReservation = (id) => {
    console.log("line 40", id);
    const reservation = reservations.find((reservation) => {
      console.log("line 42", reservation);
      console.log("line 43", reservation.id === id);
      return reservation.id === id;
    });
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
  return (
    <Container
      className="bg-light rounded"
      id="resTable">
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
                      className="table-btn"
                      variant="danger"
                      onClick={() => deleteReservation(reservation.id)}>
                      Delete
                    </Button>
                    <Button
                      className="table-btn"
                      variant="secondary"
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
          <NewReservation setReservations={setReservations} />
        </Col>
      </Row>
    </Container>
  );
}
