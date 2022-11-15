import React, { useState } from "react";
import { NoteAPI } from "./apiFiles/NotesAPI";

export const Note = () => {
  const [note, setnote] = useState([]);

  const handleChange = (event) => {
    setnote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    NoteAPI.post({ note });
    setnote("");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h2>New Note:</h2>
        <label>
          <textarea
            name="note"
            value={note}
            onChange={handleChange}
            placeholder="Enter your note"
            rows="5"
            cols="50"
          />
        </label>
        <br></br>
        <input
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};
export default Note;
