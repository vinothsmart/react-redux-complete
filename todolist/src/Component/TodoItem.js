function TodoIteam(props) {
  return (
    <li>
      <div className="todo-item">
        <span className="item-name">{props.item}</span>
      </div>
    </li>
  );
}

export default TodoIteam;
