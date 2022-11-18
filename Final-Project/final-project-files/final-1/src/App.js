import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Card, div } from "react-bootstrap";
import Home from "./components/Home";
import Comments from "./components/Comments";
import Header from "./components/Header";
import Reservations from "./components/Reservations";

export default function App() {
  return (
    <BrowserRouter>
      <Header /> {/*Create a header function and insert it here.} */}
      <main>
        <Routes>
          <Route
            path="*"
            element={<Home />}
          />
          <Route
            path="Comments"
            element={<Comments />}
          />
          <Route
            path="Reservations"
            element={<Reservations />}
          />
        </Routes>
        <Card></Card>
      </main>
    </BrowserRouter>
  );
}
