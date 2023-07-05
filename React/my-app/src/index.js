// import React from "react";
// import ReactDOM from "react-dom";
// // the div inside all are the jsx which were called as html tag
// // if you are using the latest version in which that div tag used in it can use the array as a element
// ReactDOM.render(
//   // [
//   //   <h1>hello world!</h1>,
//   //   <p>The repos hlorem qw njbre jnfre. sdj djad</p>,
//   //   <h3> hello earth </h3>,
//   // ],

//   <React.Fragment>
//     <h1>hello world!</h1>,<p>The repos hlorem qw njbre jnfre. sdj djad</p>,
//     <h3> hello earth </h3>,<h2>Netflix top 5 show </h2>
//     <ol>
//       <li>Peaky blinder</li>
//       <li>Ozark</li>
//       <li>Black mirror</li>
//       <li>You</li>
//       <li>The last kingdom</li>
//     </ol>
//   </React.Fragment>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";

const fname = "Lavesh";

ReactDOM.render(
  <React.Fragment>
    <h1>My Name is {fname}</h1>,
    <p>{fname} modi and i studies in the jecrc college </p>,
    <p>My lucky no. is the {Math.random()}</p>
  </React.Fragment>,
  document.getElementById("root")
);
