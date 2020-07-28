import React, { useState } from "react";
// import Vinoth from "./List";
// import AddList from "./AddList";
import List from "./List";

function App() {
  const [names, setNames] = useState({
    namelists: [
      { name: "Vinoth", age: 30, from: "Kumbakonam", id: 1 },
      { name: "Anand", age: 20, from: "Kumbakonam", id: 2 },
      { name: "Kanna", age: 25, from: "Kumbakonam", id: 3 },
    ],
  });
  // const addList = (namelist) => {
  //   // console.log(namelist);
  //   namelist.id = Math.random();
  //   let namelists = [...names.namelists, namelist];
  //   setNames({
  //     namelists: namelists,
  //   });
  //   console.log(names);
  // };

  // const deleteList = (id) => {};

  return (
    <div className="App">
      <h1>My React App!!</h1>
      <p>Welcome : )</p>
      {/* <Vinoth name="TempleCityVino" age="30" from="Kumbakonam" />
      <Vinoth name="Kanna" age="30" from="Kumbakonam" /> */}
      {/* <Vinoth deleteList={deleteList} namelists={names} />
      <AddList addList={addList} /> */}
      {/* <List name="Vinoth" age="30" from="Kumbakonam" />
      <List name="Ajitha" age="29" from="Palakkad" />
      <List name="Vigensh" age="28" from="Kumbakonam" /> */}
      <List lists={names.namelists} />
    </div>
  );
}

export default App;
