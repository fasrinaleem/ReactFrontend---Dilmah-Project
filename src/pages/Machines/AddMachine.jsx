import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import Input from "../../components/Input/Input";
import Buttons from "../../components/Buttons/Buttons";

export default function AddMachine() {
  return (
    <Container className="mt-4 mx-auto">
      <Row>
        <Col md={5}>
          <Form>
            <Row>
              <Col md={6}>
                <Input
                  label="Name"
                  type="text"
                  placeholder="Enter Machine Name"
                />
              </Col>
              <Col md={6}>
                <Input
                  label="Brand"
                  type="text"
                  placeholder="Enter Brand Name"
                />
              </Col>
              <Col md={6}>
                <Input
                  label="Type"
                  type="text"
                  placeholder="Enter Machine Type"
                />
              </Col>
              <Col md={6}>
                <Input
                  label="Model"
                  type="text"
                  placeholder="Enter Machine Model"
                />
              </Col>
              <Col md={6}>
                <Input
                  label="Mac Address"
                  type="text"
                  placeholder="Select Category"
                />
              </Col>
            </Row>
            <Buttons varient="primary" type="submit" text="Add Machine" />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
