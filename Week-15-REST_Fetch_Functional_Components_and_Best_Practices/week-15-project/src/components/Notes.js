import React from "react";
import { NoteAPI } from "./apiFiles/NotesAPI";

export const Notes = (props) => {
  const { note } = props;

  const handleDelete = async () => {
    await NoteAPI.delete(note.id);
    window.location.reload();
  };

  const handleEdit = () => {
    const input = document.getElementById(note.id);
    NoteAPI.update({ id: note.id, note: note.note });
    input.focus();
    window.location.reload();
  };

  return (
    <div className="note">
      <div className="note-header">
        <p>{note.note}</p>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );
};

export default Notes;
