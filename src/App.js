import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { Row, Col } from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";
import ViewMachines from "./pages/Machines/ViewMachines";
import ViewCategories from "./pages/Categories/ViewCategories";
import AddCategory from "./pages/Categories/AddCategory";
import AddMachine from "./pages/Machines/AddMachine";
import UpdateCategory from "./pages/Categories/UpdateCategory";

function App() {
  return (
    <div fluid>
      <NavBar />
      <BrowserRouter>
        <Route exact path="/machines" component={ViewMachines} />
        <Route exact path="/categories" component={ViewCategories} />
        <Route exact path="/categories/add" component={AddCategory} />
        <Route exact path="/machines/add" component={AddMachine} />
        <Route exact path="/categories/update/:id" component={UpdateCategory} />
      </BrowserRouter>
    </div>
  );
}

export default App;
