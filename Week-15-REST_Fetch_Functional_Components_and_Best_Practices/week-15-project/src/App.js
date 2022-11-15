import React from "react";
import Note from "./components/Note";
import NotesList from "./components/NotesList";
import "./app.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Note />
      <NotesList />
    </div>
  );
}

export default App;
