import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Notes from "./components/Note";
import EditNote from "./components/EditNote";
import CreateNote from "./components/CreateNote";

export default function BasicExample() {
  return (
    <Router>
      <>
        <Routes>
          <Route
            exact
            path="/"
            component={Notes}
          />
          <Route
            exact
            path="/component/:id/edit"
            component={EditNote}
          />
          <Route
            exact
            path="/component/create"
            component={CreateNote}
          />
        </Routes>
      </>
    </Router>
  );
}
