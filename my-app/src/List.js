import React from "react";

export default function List(props) {
  const { lists } = props;

  return (
    <div className="name-list">
      {lists.map((list) => {
        return list.age > 20 ? (
          <div className="list" key={list.id}>
            <div>Name: {list.name}</div>
            <div>Age: {list.age}</div>
            <div>From: {list.from}</div>
          </div>
        ) : null;
      })}
    </div>
  );
}
