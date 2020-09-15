import React from "react";
import "./Layout.css";
import { Container, Col, Row, Card } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";

//rfc
export default function Layouts() {
  return (
    <Container fluid>
      <NavBar />
      <Row className="layout-row">
        <Col md={8}></Col>
      </Row>
    </Container>
  );
}
