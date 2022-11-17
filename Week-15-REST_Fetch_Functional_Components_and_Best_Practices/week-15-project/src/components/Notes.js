import React from "react";
import { NoteAPI } from "./apiFiles/NotesAPI";

export const Notes = (props) => {
  //Handles the display of the notes
  const { note } = props;

  const handleDelete = async () => {
    //Function for deleting the podted notes from the list and api
    await NoteAPI.delete(note.id);
    window.location.reload();
  };

  const handleEdit = () => {
    //Should handle the edit function of the notes but currently is not working
    const input = document.getElementById(note.id);
    NoteAPI.update({ id: note.id, note: note.note });
    input.focus();
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
