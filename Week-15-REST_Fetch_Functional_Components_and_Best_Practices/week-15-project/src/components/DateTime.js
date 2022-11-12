import React, { Component } from "react";
import { render } from "react-dom";

export default function DateTime() {
  let currentDateTime = Date().toLocaleString();

  return currentDateTime;
}
