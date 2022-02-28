import React from "react";

const Lists = ({ lists }) => {
  return (
    <div className="name-list">
      {lists.map(({ id, name, age, from }) => {
        return age > 20 ? (
          <div className="list" key={id}>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>From: {from}</div>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Lists;
