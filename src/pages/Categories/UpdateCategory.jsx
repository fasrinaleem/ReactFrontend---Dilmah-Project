import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Container, Row, Col } from "react-bootstrap";
import { BASE_URL } from "../../api/details";
import Input from "../../components/Input/Input";
import Buttons from "../../components/Buttons/Buttons";

export default function UpdateCategory(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState({});
  const [id, setId] = useState("");
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [macAddress, setMacAddress] = useState("");
  const [model, setModel] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    getCategoryById();
  }, []);

  const handleClick = () => {
    let id = props.match.params.id;

    let data = {
      categoryId: id,
      brand,
      type,
      model,
      name,
      macAddress,
    };
    var config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
      },
    };
    axios
      .put(`${BASE_URL}/updateCategory/${id}`, data, config)
      .then((response) => {
        if (response.status === 200) {
          window.location.href = "http://localhost:3000/categories";
        }
      })
      .catch((error) => console.log(error));
  };

  const getCategoryById = () => {
    let id = props.match.params.id;
    axios
      .get(`${BASE_URL}/categories/${id}`)
      .then((response) => {
        const {
          categoryId,
          brand,
          type,
          model,
          name,
          macAddress,
        } = response.data;
        response.status === 200 && setIsLoading(false);
        setId(categoryId);
        setBrand(brand);
        setType(type);
        setModel(model);
        setName(name);
        setMacAddress(macAddress);
      })
      .catch((error) => console.log(error));
  };

  const input = () => {
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
                text="Update Category"
                handleClick={() => handleClick()}
              />
            </Form>
            <span className="error-text"> {error} </span>
          </Col>
        </Row>
      </Container>
    );
  };

  return !isLoading && input();
}
