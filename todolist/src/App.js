import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import TodoComponent from "./Component/TodoComponent";
import TodoItem from "./Component/TodoItem";
import AddItem from "./Component/AddItem";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutUs from "./Component/AboutUs";

function App() {
  let myBriyani = {
    name: "Briyani",
    variety: "Chicken 65 Briyani",
    price: "250",
  };

  const [intialState, setIntialState] = useState({
    todos: [
      "wash up",
      "eat some Briyani",
      "take a nap",
      "need to drink rose milk",
    ],
    age: 30,
  });

  // setTimeout(() => {
  //   setIntialState({
  //     todos: ["wash up", "eat some Briyani", "take a nap"],
  //     age: 35,
  //   });
  // }, 5000);

  // custom function
  const handleClick = () => {
    console.log("You Clicked Me");
  };

  const onDelete = (item) => {
    let updateTodos = intialState.todos.filter((val, index) => {
      return item !== val;
    });

    setIntialState({
      todos: updateTodos,
    });
  };

  const onAdd = (item) => {
    let updateTodos = intialState.todos;
    updateTodos.push(item);

    setIntialState({
      todos: updateTodos,
    });
  };
  // lifecycle functions
  useEffect(() => {
    console.log("componentWillMount");
  });

  let todos = intialState.todos;
  todos = todos.map((item, index) => {
    return <TodoItem item={item} key={index} onDelete={onDelete} />;
  });

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <Router>
        {/* <Route path={"/"} component={TodoComponent}></Route> */}
        <Route path={"/about"} component={AboutUs}></Route>
      </Router>
      <div id="todo-wrapper">
        <TodoComponent message="I Like Briyani" briyani={myBriyani} />
        <div>
          <p onClick={handleClick}>
            The business people have the most leisure...
          </p>
          <p>{intialState.age}</p>
          <ul>
            {/* <li>{intialState.todos[0]}</li>
          <li>{intialState.todos[1]}</li>
          <li>{intialState.todos[2]}</li> */}
            {todos}
          </ul>
          <AddItem onAdd={onAdd} />
        </div>
      </div>
    </>
  );
}

export default App;
