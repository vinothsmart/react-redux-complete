import React from "react";

function Vinoth(props) {
  //   const { name, age, from } = props;
  //   const { namelists } = props;
  const nameList = props.namelists.namelists.map((namelist) => {
    return (
      <div className="vinoth" key={namelist.id}>
        <div>Name : {namelist.name}</div>
        <div>Age : {namelist.age} </div>
        <div>From : {namelist.from}</div>
      </div>
    );
  });
  return <div className="vinothList">{nameList}</div>;
}

export default Vinoth;
