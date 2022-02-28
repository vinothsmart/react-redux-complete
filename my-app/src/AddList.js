import React, { useState, useCallback } from "react";

const AddList = ({ addList }) => {
  const [state, setState] = useState({
    name: null,
    age: null,
    from: null,
  });

  const handleChange = useCallback(
    (e) => {
      setState({
        ...state,
        [e.target.id]: e.target.value,
      });
    },
    [state]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      addList(state);
    },
    [state, addList]
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" onChange={handleChange} />
        <label htmlFor="age">Age:</label>
        <input type="text" id="age" onChange={handleChange} />
        <label htmlFor="form">From:</label>
        <input type="text" id="from" onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddList;
