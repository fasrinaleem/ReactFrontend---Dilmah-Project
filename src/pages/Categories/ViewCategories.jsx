import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../../api/details";
import Buttons from "../../components/Buttons/Buttons";
import Modals from "../../components/Modals/Modals";

export default function ViewCategories(props) {
  const [category, setCategory] = useState([]);
  const [error, setError] = useState("");
  const [deletepopup, setDeletePopup] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    getCategory();
  }, []);

  const onDelete = () => {
    axios
      .delete(`${BASE_URL}/deleteCategory/${currentId}`)
      .then((response) => {
        window.location.reload();
        setDeletePopup(false);
      })
      .catch((err) => console.log(err));
  };

  const onCancel = () => {
    setDeletePopup(false);
  };

  const getCategory = () => {
    axios
      .get(`${BASE_URL}/categories`)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => setError(err));
  };

  const renderGrid = () => {
    return category.map((value) => {
      console.log(value.categoryId);
      return (
        <Col md={3} className="mt-4 mx-2">
          <Card style={{ width: "18rem" }} className="mb-2">
            <Card.Body>
              <Card.Title>{value.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {value.brand}
              </Card.Subtitle>
              <Card.Text>{value.model}</Card.Text>
            </Card.Body>
          </Card>
          <Buttons
            text="Update"
            size="sm"
            handleClick={() =>
              (window.location.href = `http://localhost:3000/categories/update/${value.categoryId}`)
            }
          />
          <Buttons
            text="Delete"
            variant="danger"
            size="sm"
            handleClick={() => {
              setCurrentId(value.categoryId);
              setDeletePopup(true);
            }}
          />
        </Col>
      );
    });
  };

  return (
    <Container>
      <Row>{renderGrid()}</Row>
      {deletepopup && (
        <Modals
          successText="Delete"
          cancelText="Cancel"
          handleSuccessClick={() => onDelete()}
          handleCancelClick={() => onCancel()}
        />
      )}
    </Container>
  );
}
