import React, { useState } from "react";
import Vinoth from "./Vinoth";
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
    // console.log(namelist);
    namelist.id = Math.random();
    let namelists = [...names.namelists, namelist];
    setNames({
      namelists: namelists,
    });
    console.log(namelists);
  };
  return (
    <div className="App">
      <h1>My React App!!</h1>
      <p>Welcome : )</p>
      {/* <Vinoth name="TempleCityVino" age="30" from="Kumbakonam" />
      <Vinoth name="Kanna" age="30" from="Kumbakonam" /> */}
      <Vinoth namelists={names} />
      <AddList addList={addList} />
    </div>
  );
}

export default App;
