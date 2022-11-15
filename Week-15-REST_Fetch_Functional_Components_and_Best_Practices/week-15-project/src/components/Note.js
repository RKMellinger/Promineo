import React, { useState } from "react";
import { render } from "react-dom";
import { NoteAPI } from "./apiFiles/NotesAPI";

//Creates the new note form
export const Note = () => {
  const [note, setnote] = useState([]);

  const handleChange = (event) => {
    setnote(event.target.value);
  };

  // Handles the submit function of the new note
  const handleSubmit = (event) => {
    event.preventDefault();
    NoteAPI.post({ note });
    setnote("");
    render();
  };

  // Displays the new note user input area
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
