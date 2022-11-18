import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Reservations from "./components/Reservations";
import Home from "./components/Home";
import Comments from "./components/Comments";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="header">
          <ul>
            <li>
              <Header />
            </li>
            <li>
              <Link to="./Home">Home</Link>
            </li>
            <li>
              <Link to="./Comments">Comments</Link>
            </li>
            <li>
              <Link to=".Reservations">Reservations</Link>
            </li>
          </ul>
        </div>
        <div className="main">
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
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
