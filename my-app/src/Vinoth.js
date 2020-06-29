import React from "react";

function Vinoth(props) {
  //   const { name, age, from } = props;
  const { namelists } = props.namelists;
  const nameList = namelists.map((namelist) => {
    if (namelist.age > 20) {
      return (
        <div className="vinoth" key={namelist.id}>
          <div>Name : {namelist.name}</div>
          <div>Age : {namelist.age} </div>
          <div>From : {namelist.from}</div>
        </div>
      );
    } else {
      return null;
    }
  });
  return <div className="vinothList">{nameList}</div>;
}

export default Vinoth;
