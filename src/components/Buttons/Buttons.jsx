import React from "react";
import { Button } from "react-bootstrap";

export default function Buttons(props) {
  return (
    <Button
      variant={props.variant}
      type={props.type}
      size={props.size}
      onClick={props.handleClick}
    >
      {props.text}
    </Button>
  );
}
