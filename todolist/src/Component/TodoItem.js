import "../css/todoitem.css";

function TodoIteam(props) {
  // custom functions
  const handleDelete = () => {
    return props.onDelete(props.item);
  };

  return (
    <div id="todo-list">
      <ul>
        <li>
          <div className="todo-item">
            <span className="item-name">{props.item} </span>
            <span className="item-delete" onClick={handleDelete}>
              x
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default TodoIteam;
