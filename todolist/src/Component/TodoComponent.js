function TodoComponent(props) {
  return (
    <div>
      <h1>Vinoth</h1>
      <p>Hello</p>
      <p>{props.message}</p>
      <p>
        <strong>Briyani Name : </strong> {props.briyani.name}
      </p>
      <p>
        <strong>Briyani Variety : </strong> {props.briyani.variety}
      </p>
      <p>
        <strong>Briyani Price : </strong> {props.briyani.price}
      </p>
    </div>
  );
}

export default TodoComponent;
