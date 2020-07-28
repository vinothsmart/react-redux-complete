import React, { useState } from "react";

function AddList(props) {
  let initialState = {
    name: null,
    age: null,
    form: null,
  };
  const [state, setState] = useState(initialState);
  const handleChange = (e) => {
    setState({
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(state);
    props.addList(state);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" onChange={handleChange} />
        <label htmlFor="age">Age:</label>
        <input type="text" id="age" onChange={handleChange} />
        <label htmlFor="form">Form:</label>
        <input type="text" id="form" onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default AddList;
