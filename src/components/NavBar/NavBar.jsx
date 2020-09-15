import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Dilmah Dashboard</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title="Category" id="basic-nav-dropdown">
            <NavDropdown.Item href="/categories/add">
              Add Category
            </NavDropdown.Item>
            <NavDropdown.Item href="/categories">
              View Category
            </NavDropdown.Item>
          </NavDropdown>{" "}
          <NavDropdown title="Machine" id="basic-nav-dropdown">
            <NavDropdown.Item href="/machines/add">
              Add Machine
            </NavDropdown.Item>
            <NavDropdown.Item href="/machines">View Machine</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
