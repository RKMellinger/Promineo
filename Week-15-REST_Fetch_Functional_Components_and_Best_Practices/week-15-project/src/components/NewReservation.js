import React, { useState } from "react";

export default function NewReservation(props) {
  const [name, setName] = useState("");
  const [details, setDetails] = useState(undefined);

  const handleDetailsInput = (e) => {
    const int = parseInt(e.target.value, 10);
    setDetails(int >= 0 ? int : "");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name && details) {
      props.addNewReservation({ name, details });
      setName("");
      setDetails("");
    } else {
      console.log("invalid input");
    }
  };

  return (
    <div>
      <h4>Add a new Reservation</h4>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="Number in Group"
          onChange={handleDetailsInput}
          value={details}
        />
        <button type="submit">Add Reservation</button>
      </form>
    </div>
  );
}
