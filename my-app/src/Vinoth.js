import React from "react";

function Vinoth(props) {
  return (
    <div className="vinoth">
      <div>Name : {props.name}</div>
      <div>Age : {props.age} </div>
      <div>From : {props.from}</div>
    </div>
  );
}

export default Vinoth;
