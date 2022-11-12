import React from "react";
import ".././App.css";
import { reservationApi } from "./Caller";
import { Reservation } from "./Reservation";

export default class ReservationList extends React.Component {
  state = {
    reservation: [],
  };

  componentDidMount() {
    this.fetchReservation();
  }
  fetchReservation = async () => {
    const reservation = await reservationApi.get();
    this.setState({ reservation });
  };
  updateReservation = async (updatedReservation) => {
    await reservationApi.put(updatedReservation);
    this.fetchReservation();
  };
  logReservation() {
    console.log(this.state.reservation);
  }
  render() {
    console.log(this.state.reservation);
    return (
      <div
        className="container-flex"
        id="reservation-list">
        {this.state.reservation.map((reservation) => (
          <div
            key={reservation._id}
            onChange={this.logReservation}>
            <Reservation
              reservation={reservation}
              updateReservation={this.updateReservation}
            />
          </div>
        ))}
      </div>
    );
  }
}
