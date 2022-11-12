import React, { useEffect } from "react";

const RESERVATIONS_API =
  "https://63502b28df22c2af7b657cd0.mockapi.io/current/milliways";

class ReservationsApi {
  get = async () => {
    try {
      const resp = await fetch(RESERVATIONS_API);
      const data = await resp.json();
      return data;
    } catch (e) {
      console.log("Opps, looks like there is a fetch issue", e);
    }
  };
  put = async (reservation) => {
    try {
      const resp = await fetch(`${RESERVATIONS_API}/${reservation._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(reservation),
      });
      return await resp.json();
    } catch (e) {
      console.log("Looks like there is an updating issue", e);
    }
  };
}
export const reservationApi = new ReservationsApi();
