import React, { useEffect } from "react";

export default function Caller() {
  const [reservationList, setReservationList] = [];

  const refreshReservationList = async () => {
    const response = await fetch(
      "https://63502b28df22c2af7b657cd0.mockapi.io/current/reservations"
    );
    const data = await response.json();
    setReservationList(data);
  };

  useEffect(() => {
    refreshReservationList();
  }, []);
  const handleClick = () => {
    const newReservation = getState(id, name, details);
  };

  return <div></div>;
}
