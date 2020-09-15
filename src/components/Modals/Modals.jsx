import React from "react";
import { Modal } from "react-bootstrap";
import Buttons from "../../components/Buttons/Buttons";

export default function Modals(props) {
  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Buttons
            variant="secondary"
            text={props.successText}
            handleClick={props.handleSuccessClick}
          />
          <Buttons
            variant="primary"
            text={props.cancelText}
            handleClick={props.handleCancelClick}
          />
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
