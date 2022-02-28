import React from "react";

const Lists = ({ lists }) => {
  return (
    <div className="name-list">
      {lists.map((list) =>
        list.age > 20 ? (
          <div className="list" key={list.id}>
            <div>Name: {list.name}</div>
            <div>Age: {list.age}</div>
            <div>From: {list.from}</div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default Lists;
