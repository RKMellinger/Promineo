import React, { Component } from "react";
import NewReservation from "./NewReservation";

function updateReservation() {}

export const Reservation = (props) => {
  console.log(props);
  const { reservation, updatereservation } = props;

  const deleteRes = (resId) => {
    const updatereservation = {
      ...reservation,
      name: reservation.name.filter((x) => x._.id !== resId),
    };

    updateReservation(updatereservation);
  };

  const addNewRes = (name) =>
    updateReservation({ ...reservation, name: [...reservation.name, name] });

  const name = () => (
    <ul>
      {reservation.name.map((name, index) => {
        <li key={index}>
          <label>{`${name} Details: ${reservation.details}`}</label>
          <button onClick={(e) => deleteRes(name.id)}>Delete</button>
        </li>;
      })}
    </ul>
  );
  return (
    <div>
      <h1>{reservation.name}</h1>
      {name({ name, reservationId: reservation.id, deleteRes })}
      <NewReservation addNewRes={addNewRes} />
    </div>
  );
};
export default Reservation;
