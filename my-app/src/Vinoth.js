import React from "react";

function Vinoth(props) {
  const { name, age, from } = props;
  return (
    <div className="vinoth">
      <div>Name : {name}</div>
      <div>Age : {age} </div>
      <div>From : {from}</div>
    </div>
  );
}

export default Vinoth;
