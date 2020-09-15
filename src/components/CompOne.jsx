// Java Script Xml
// Exactly looks like html
//rce --> class components
import React from "react";

//Components
//1. Class Components
//2. Functional Components

class CompOne extends React.Component {
  //rcons
  constructor(props) {
    super(props);
    this.state = {
      // name: "Fasrin",
      // id: "12",
      value: 0,
      alertVisible: false,
      names: ["Fasrin", "Medhavi", "Deluxan"],
    };
  }
  /// <h1> name: {this.state.name}</h1>
  //  <h2> id: {this.state.id}</h2>
  // <p> {this.props.text}</p>

//destructuring
// const {value} = this.state



  handleIncrement = () => {
    this.setState({
      //spread operator -> take the copy of the state
      ...this.state,
      value: this.state.value + 1,
    });
    this.setState({ alertVisible: false });
  };

  handleDecrement = () => {
    if (this.state.value == 0) {
      this.setState({
        ...this.state,
        alertVisible: true,
      });
    } else if (this.state.value > 0) {
      this.setState({
        ...this.state,
        value: this.state.value - 1,
      });
      this.setState({ alertVisible: false });
    }
  };

  conditionalAlert = () => {
    alert("You can't decrement further");
  };

  renderNames = () => {
    //map method only works on arrays
    return this.state.names.map((value) => {
      return <h6 key={value}> {value} </h6>;
      //console.log(value);
    });
  };

  render() {
    //  return <p> This is a class Component </p>;
    return (
      <React.Fragment>
        {this.renderNames()}
        {this.state.alertVisible ? this.conditionalAlert() : null}
        {this.state.alertVisible && this.conditionalAlert()}
        <button onClick={() => this.handleIncrement()}> + </button>
        <p> {this.state.value} </p>
        <button onClick={() => this.handleDecrement()}> - </button>
      </React.Fragment>
    );
  }
}

//conditioning rendering
//should not reduce than 0.

//export
//1. Default Export
//2. Name Export --> import inside {}

//state --> object (stores the values)
export default CompOne;
