function TodoIteam(props) {
  // custom functions
  const handleDelete = () => {
    return props.onDelete(props.item);
  };

  return (
    <li>
      <div className="todo-item">
        <span className="item-name">{props.item} </span>
        <span className="item-delete" onClick={handleDelete}>
          x
        </span>
      </div>
    </li>
  );
}

export default TodoIteam;
