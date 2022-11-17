import React from "react";
import { NoteAPI } from "./apiFiles/NotesAPI";

export const Notes = (props) => {
  //Handles the display of the notes
  const { note } = props;

  const handleDelete = async () => {
    //Function for deleting the posted notes from the list and api
    await NoteAPI.delete(note.id);
    window.location.reload();
  };

  // creates edit window to update notes and post notes
  const handleEdit = async () => {
    //Function for editing the posted notes from the list and api
    const newNote = prompt("Edit your note", note.note);
    await NoteAPI.put(note.id, { note: newNote });
    window.location.reload();
  };

  return (
    //Displays the notes recieved from the api.
    <div className="note">
      <p>{note.note}</p>
      <div className="note-buttons">
        <button
          className="edit"
          onClick={handleEdit}>
          Edit
        </button>
        <button
          className="delete"
          onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Notes;
