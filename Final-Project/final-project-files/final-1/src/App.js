import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {} from "react-bootstrap";
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
      </main>
    </BrowserRouter>
  );
}
