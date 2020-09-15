import React, { useState } from "react";
import "./AddCategory.css";
import { Form, Container, Row, Col } from "react-bootstrap";
import Input from "../../components/Input/Input";
import Buttons from "../../components/Buttons/Buttons";
import axios from "axios";
import { BASE_URL } from "../../api/details";

export default function AddCategory() {
  const [id, setId] = useState("");
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [macAddress, setMacAddress] = useState("");
  const [model, setModel] = useState("");
  const [error, setError] = useState(null);

  const handleClick = () => {
    let data = {
      brand,
      type,
      model,
      name,
      macAddress,
    };
    console.log("DATA", data);
    if (
      brand === "" ||
      type === "" ||
      name === "" ||
      macAddress === "" ||
      model === ""
    ) {
      setError("Fields cannot be empty");
    } else {
      axios
        .post(`${BASE_URL}/categories/`, data)
        .then((res) => {
          if (res.status === 200) {
            window.location.href = "http://localhost:3000/categories";
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Container className="mt-4 mx-auto">
      <Row>
        <Col md={5}>
          <Form>
            <Row>
              <Col md={6}>
                <Input
                  label="Brand"
                  type="text"
                  value={brand}
                  placeholder="Enter Brand Name"
                  onChangeText={(event) => setBrand(event.target.value)}
                />
              </Col>

              <Col md={6}>
                <Input
                  label="Model"
                  type="text"
                  value={model}
                  placeholder="Enter Model"
                  onChangeText={(event) => setModel(event.target.value)}
                />
              </Col>
              <Col md={6}>
                <Input
                  label="Type"
                  type="text"
                  value={type}
                  placeholder="Enter Category Type"
                  onChangeText={(event) => setType(event.target.value)}
                />
              </Col>
              <Col md={6}>
                <Input
                  label="Name"
                  type="text"
                  value={name}
                  placeholder="Enter Category Name"
                  onChangeText={(event) => setName(event.target.value)}
                />
              </Col>
              <Col md={6}>
                <Input
                  label="Mac Address"
                  type="text"
                  value={macAddress}
                  placeholder="Enter MacAddress"
                  onChangeText={(event) => setMacAddress(event.target.value)}
                />
              </Col>
            </Row>
            <Buttons
              varient="primary"
              type="button"
              text="Add Category"
              handleClick={() => handleClick()}
            />
          </Form>
          <span className="error-text"> {error} </span>
        </Col>
      </Row>
    </Container>
  );
}
