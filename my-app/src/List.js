import React from "react";

// function Vinoth(props) {
//   //   const { name, age, from } = props;
//   const { namelists } = props.namelists;
//   //   const nameList = namelists.map((namelist) => {
//   //     if (namelist.age > 20) {
//   //       return (
//   //         <div className="vinoth" key={namelist.id}>
//   //           <div>Name : {namelist.name}</div>
//   //           <div>Age : {namelist.age} </div>
//   //           <div>From : {namelist.from}</div>
//   //         </div>
//   //       );
//   //     } else {
//   //       return null;
//   //     }
//   //   });
//   return (
//     <div className="vinothList">
//       {namelists.map((namelist) => {
//         return namelist.age > 20 ? (
//           <div className="vinoth" key={namelist.id}>
//             <div>Name : {namelist.name}</div>
//             <div>Age : {namelist.age} </div>
//             <div>From : {namelist.from}</div>
//             <button onClick={() => props.deleteList(namelist.id)}>
//               Delete
//             </button>
//           </div>
//         ) : null;
//       })}
//     </div>
//   );
// }

// export default Vinoth;

export default function List(props) {
  const { name, age, from } = props;
  return (
    <div className="list">
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>From: {from}</div>
    </div>
  );
}
