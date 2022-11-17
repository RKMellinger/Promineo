import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Note from "./components/Note";
import NotesList from "./components/NotesList";
import Header from "./components/Header";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header />
      <Note />
      <Container className="container ">
        <NotesList />
      </Container>
    </div>
  );
}

export default App;
