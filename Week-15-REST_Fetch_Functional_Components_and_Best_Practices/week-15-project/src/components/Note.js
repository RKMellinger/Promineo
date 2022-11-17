import React, { useState } from "react";
import { render } from "react-dom";
import { NoteAPI } from "./apiFiles/NotesAPI";

//Creates the new note form
export const Note = (props) => {
  console.log("line 7", props);
  const [note, setnote] = useState([]);

  const handleChange = (event) => {
    setnote(event.target.value);
  };

  // Handles the submit function of the new note
  const handleSubmit = async (event) => {
    event.preventDefault();
    let post = await NoteAPI.post({ note });
    setnote("");
    let latestData = await NoteAPI.get();
    props.setNewNotes(latestData);
    console.log("note 21", latestData);
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
