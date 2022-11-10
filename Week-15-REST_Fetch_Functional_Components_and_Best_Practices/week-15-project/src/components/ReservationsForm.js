import React from "react";

export default function ReservationsForm() {
  fetch("https://63502b28df22c2af7b657cd0.mockapi.io/current/stuff")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return console.log(data);
    })
    .catch((err) => console.error(err));
}
