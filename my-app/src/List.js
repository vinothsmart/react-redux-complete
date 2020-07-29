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
  const { lists } = props;

  // const nameList = lists.map((list) => {
  //   if (list.age > 20) {
  //     return (
  //       <div className="list" key={list.id}>
  //         <div>Name: {list.name}</div>
  //         <div>Age: {list.age}</div>
  //         <div>From: {list.from}</div>
  //       </div>
  //     );
  //   } else {
  //     return null;
  //   }
  // });

  // const nameList = lists.map((list) => {
  //   return list.age > 20 ? (
  //     <div className="list" key={list.id}>
  //       <div>Name: {list.name}</div>
  //       <div>Age: {list.age}</div>
  //       <div>From: {list.from}</div>
  //     </div>
  //   ) : null;
  // });

  return (
    <div className="name-list">
      {lists.map((list) => {
        return list.age > 20 ? (
          <div className="list" key={list.id}>
            <div>Name: {list.name}</div>
            <div>Age: {list.age}</div>
            <div>From: {list.from}</div>
          </div>
        ) : null;
      })}
    </div>
  );
}
