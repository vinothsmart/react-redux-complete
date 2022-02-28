import React from "react";

export default function Lists({ lists }) {
  return (
    <div className="name-list">
      {lists.map((list) => {
        const { id, name, age, from } = list;
        return list.age > 20 ? (
          <div className="list" key={id}>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>From: {from}</div>
          </div>
        ) : null;
      })}
    </div>
  );
}
