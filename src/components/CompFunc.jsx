import React from "react";

function CompFunc(props) {
  // return <p> This is a function component </p>;
  return (
    <React.Fragment>
      <p> {props.value}</p>
      <p> {props.text} </p>
    </React.Fragment>
  );
}

//fun com does not support state
//we can't use this keyword - we dirrectly call
export default CompFunc;
