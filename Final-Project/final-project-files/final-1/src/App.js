import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Reservations from "./components/display-components/Reservations";
import Home from "./components/display-components/Home";
import Comments from "./components/display-components/Comments";
import Footer from "./components/display-components/Footer";
import Header from "./components/display-components/Header";

export default function App() {
  return (
    <div className="routerContainer">
      <Router>
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
              <Link to="./Reservations">Reservations</Link>
            </li>
            <li>
              <Footer />
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
      </Router>
    </div>
  );
}
