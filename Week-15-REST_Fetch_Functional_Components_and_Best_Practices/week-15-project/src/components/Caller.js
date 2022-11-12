import React, { useEffect } from "react";

let returnedData;

export default function Caller() {
  fetch("https://63502b28df22c2af7b657cd0.mockapi.io/current/reservations")
    .then((res) => res.json())
    .then((data) => (data = returnedData));
  return console.log(returnedData);
}
