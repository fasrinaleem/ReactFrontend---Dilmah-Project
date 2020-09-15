import React, { Component, Fragment } from "react";

export class FormHandling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
      errorMessage: null,
    };
  }

  handleName = (event) => {
    const { name } = this.state;
    this.setState({ ...this.state, name: event.target.value });
    // console.log(event.target.value);
  };

  handlePassword = (event) => {
    const { password } = this.state;
    this.setState({ ...this.state, password: event.target.value });
  };

  handleSignin = () => {
    const { name, password, errorMessage } = this.state;
    if (name.length == 0) {
      this.setState({
        ...this.state,
        errorMessage: "Name should'not be empty",
      });
    } else if (name.length < 6) {
      this.setState({
        ...this.state,
        errorMessage: "Name should be atleast 6 characters",
      });
    }
  };

  render() {
    const { name, password, errorMessage } = this.state;
    return (
      <Fragment>
        <input
          type="text"
          placeholder="username"
          value={name}
          onChange={(event) => this.handleName(event)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => this.handlePassword(event)}
        />
        <button onClick={() => this.handleSignin()}> Sign In</button>
        <p> {errorMessage !== null && errorMessage} </p>
        {name}
      </Fragment>
    );
  }
}

export default FormHandling;
