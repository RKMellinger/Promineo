import React from "react";
import Footer from "./Footer";
import NavbarSetup from "./NavbarSetup";
import ReservationCard from "./ReservationCard";

export default function ApplicationBuild() {
  return (
    <div>
      <header>
        <NavbarSetup />
      </header>
      <body>
        <ReservationCard />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
