import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Caller() {
  const NOTES_API =
    "https://63502b28df22c2af7b657cd0.mockapi.io/current/notepad";

  const postData = () => {
    axios.post(NOTES_API, {
      text,
      date,
      id,
    });
  };
  useEffect(() => {
    axios
      .get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);
}
