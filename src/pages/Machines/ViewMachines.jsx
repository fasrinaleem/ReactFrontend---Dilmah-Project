import React, { useState, useEffect } from "react";
import { Container, Row, Table } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../../api/details";

export default function ViewMachines() {
  const [machines, setMachine] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getMachine();
  }, []);

  const getMachine = () => {
    axios
      .get(`${BASE_URL}/machines`)
      .then((res) => {
        setMachine(res);
      })
      .catch((err) => setError(err));
  };

  const renderRow = () => {
    return machines.map((value) => {
      return (
        <tr>
          <td>11</td>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      );
    });
  };

  return (
    <Container>
      <Row>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Type</th>
              <th>Model</th>
              <th>Mac Address</th>
            </tr>
            {renderRow()}
          </thead>
          <tbody></tbody>
        </Table>
      </Row>
    </Container>
  );
}
