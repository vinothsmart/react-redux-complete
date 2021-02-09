import React, { useRef } from "react";
import "../css/addItem.css";

function AddItem(props) {
  const inputNewItem = useRef(null);
  const handleSumbit = (e) => {
    e.preventDefault();
    props.onAdd(inputNewItem.current.value);
  };

  return (
    <form id="add-todo" onSubmit={handleSumbit}>
      <input type="text" required ref={inputNewItem} />
      <input type="submit" value="Hit me" />
    </form>
  );
}

export default AddItem;
