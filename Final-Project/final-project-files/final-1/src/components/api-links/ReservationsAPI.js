import { data } from "jquery";
import React from "react";

let RESERVATION_CALL =
  "https://63502b28df22c2af7b657cd0.mockapi.io/current/newReservations";

//function to get reservation name and details data from api
function ReservationsAPI() {
  const get = async () => {
    const response = await fetch(RESERVATION_CALL);
    const data = await response.json();
    return data;
  };

  //function to post reservation name and details data to api
  const post = async (reservation) => {
    const response = await fetch(RESERVATION_CALL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservation),
    });
    const data = await response.json();
    return data;
  };

  //function to update reservation name and details data to api
  const update = async (reservation) => {
    const response = await fetch(`${RESERVATION_CALL}/${reservation.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservation),
    });
    const data = await response.json();
    return data;
  };

  //function to delete reservation name and details data to api
  const deleteReservation = async (id) => {
    const response = await fetch(`${RESERVATION_CALL}/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  };

  return {
    get,
    post,
    update,
    delete: deleteReservation,
  };
}

export default ReservationsAPI;
