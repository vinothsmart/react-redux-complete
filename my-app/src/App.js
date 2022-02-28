import React, { useState } from "react";
import Lists from "./Lists";
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
      <Lists lists={names.namelists} />
      <AddList addList={addList} />
    </div>
  );
}

export default App;
