import React from "react";
import "./Lists.css";

const Lists = ({ lists, deletelist }) => {
  return (
    <div className="name-list">
      {lists.map((list) =>
        list.age > 20 ? (
          <div className="list" key={list.id}>
            <div>Name: {list.name}</div>
            <div>Age: {list.age}</div>
            <div>From: {list.from}</div>
            <button onClick={() => deletelist(list.id)}>Delete list</button>
          </div>
        ) : null
      )}
    </div>
  );
};

export default Lists;
