import React from "react";

// Creates the CSS logo on the page
export default function Header() {
  return (
    <div className="nav-logo">
      {/* Creating the text part of the logo */}
      <p className="milliways">Milliways</p>
      <div className="nav-logo-logo">{/* Creating parts of the logo */}</div>
    </div>
  );
}
