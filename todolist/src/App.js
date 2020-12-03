import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoComponent from "./Component/TodoComponent";

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

  let todos = intialState.todos;
  todos = todos.map((item, index) => {
    return <li>{item}</li>;
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

    <div>
      <TodoComponent message="I Like Briyani" briyani={myBriyani} />
      <div>
        <p>The business people have the most leisure...</p>
        <p>{intialState.age}</p>
        <ul>
          {/* <li>{intialState.todos[0]}</li>
          <li>{intialState.todos[1]}</li>
          <li>{intialState.todos[2]}</li> */}
          {todos}
        </ul>
      </div>
    </div>
  );
}

export default App;
