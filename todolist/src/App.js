import logo from "./logo.svg";
import "./App.css";
import TodoComponent from "./Component/TodoComponent";

function App() {
  let myBriyani = {
    name: "Briyani",
    variety: "Chicken 65 Briyani",
    price: "250",
  };
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
    </div>
  );
}

export default App;
