import React, { useRef } from "react";

function AddItem() {
  const inputNewItem = useRef(null);
  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(inputNewItem.current.value);
  };

  return (
    <form id="add-toto" onSubmit={handleSumbit}>
      <input type="text" required ref={inputNewItem} />
      <input type="submit" value="Hit me" />
    </form>
  );
}

export default AddItem;
