import { data } from "jquery";
import React from "react";

let RESERVATION_CALL =
  "https://63502b28df22c2af7b657cd0.mockapi.io/current/reservations";

function RESERVATION_API() {
  //makes the api call to get reservations data from mockAPI
  const get = async () => {
    const response = await fetch(RESERVATION_CALL);
    const data = await response.json();
    return data;
  };

  //makes the api call to post reservations data to mockAPI
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

  //makes the api call to update reservations data to mockAPI
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

  //makes the api call to delete reservations data from mockAPI
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

export default RESERVATION_API;
