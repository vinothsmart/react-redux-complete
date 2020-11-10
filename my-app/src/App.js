import React, { useState } from "react";
import List from "./List";
import AddList from "./AddList";

function App() {
  const [names, setNames] = useState({
    namelists: [
      { name: "Vinoth", age: 30, from: "Kumbakonam", id: 1 },
      { name: "Anand", age: 20, from: "Kumbakonam", id: 2 },
      { name: "Kanna", age: 25, from: "Kumbakonam", id: 3 },
    ],
  });

  const addList = (namelist) => {
    namelist.id = Math.random();
    let lists = [...names.namelists, namelist];
    setNames({
      namelists: lists,
    });
  };

  return (
    <div className="App">
      <h1>My React App!!</h1>
      <p>Welcome : )</p>
      {/* <List name="Vinoth" age="30" from="Kumbakonam" />
      <List name="Ajitha" age="29" from="Palakkad" />
      <List name="Vigensh" age="28" from="Kumbakonam" /> */}
      <List lists={names.namelists} />
      <AddList addList={addList} />
    </div>
  );
}

export default App;
