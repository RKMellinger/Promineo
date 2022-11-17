import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Note from "./components/Note";
import NotesList from "./components/NotesList";
import Header from "./components/Header";
import { Container } from "react-bootstrap";

function App() {
  const [newNotes, setNewNotes] = useState([]);
  // const [note, setnote] = useState([]);

  console.log(newNotes);
  return (
    <div className="App">
      <Header />
      <Note setNewNotes={setNewNotes} />
      <Container className="container ">
        <NotesList newNotes={newNotes} />
      </Container>
    </div>
  );
}

export default App;
