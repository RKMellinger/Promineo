import React, { useState } from "react";
import { Col, Container, Row, Alert } from "react-bootstrap";

export default function NewReservation() {
  // MockAPI is, _id, name, details [email, quantity, request].
  const [resID, setResID] = useState();
  const [resName, setResName] = useState();
  const [resData, setPageData] = useState([]);

  return (
    <Row>
      <Col>Deano</Col>
      <Col>ratpack@loungeacts.com</Col>
      <Col>4</Col>
      <Col>Bar</Col>
    </Row>
  );
}
