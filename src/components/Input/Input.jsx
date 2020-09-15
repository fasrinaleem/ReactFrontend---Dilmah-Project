import React from "react";
import { Form } from "react-bootstrap";

export default function Input(props) {
  return (
    // controlId="formBasicEmail"
    <Form.Group>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChangeText}
        value={props.value}
      />
    </Form.Group>
  );
}
