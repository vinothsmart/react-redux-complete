import React from "react";

const DeleteList = (deletelist, listId) => {
  return <button onClick={() => deletelist(listId)}>Delete list</button>;
};

export default DeleteList;
