import React from "react";

let RESERVATION_CALL =
  "https://63502b28df22c2af7b657cd0.mockapi.io/current/reservations";

class RESERVATION_API {
  //makes the api call to get the reservations
  get = async () => {
    try {
      const response = await fetch(RESERVATION_CALL);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("There is an error in the get method", error);
    }
  };

  update = async (reservation) => {
    //updates the reservations
    try {
      const response = await fetch(RESERVATION_CALL + "/" + reservation.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reservation: reservation.reservation }),
      });
      return await response.json();
    } catch (error) {
      console.log("There is an error in the update method", error);
    }
  };

  post = async (reservation) => {
    //posts the reservations
    console.log("line 33", reservation);
    try {
      const response = await fetch(RESERVATION_CALL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservation),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("There is an error in the post method", error);
    }
  };

  delete = async (id) => {
    //deletes the reservations
    try {
      const response = await fetch(RESERVATION_CALL + "/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("There is an error in the delete method", error);
    }
  };
}

export const ReservationAPI = new RESERVATION_API();
