import React from "react";
import NotesList from "./components/NotesList";

//https://www.youtube.com/watch?v=8KB3DHI-QbM&ab_channel=ChrisBlakely
export default function App() {
  return (
    <div>
      <h1>Greetings Program</h1>
      <div className="container">
        <NotesList />
      </div>
    </div>
  );
}
