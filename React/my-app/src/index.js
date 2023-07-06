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

// import React from "react";
// import ReactDOM from "react-dom";

// const fname = "Lavesh";

// // ReactDOM.render(
// //   <React.Fragment>
// //     <h1>My Name is {fname}</h1>,
// //     <p>{fname} modi and i studies in the jecrc college </p>,
// //     <p>My lucky no. is the {Math.random()}</p>
// //   </React.Fragment>,
// //   document.getElementById("root")
// // );
// // import React from "react";
// // import ReactDOM from "react-dom";
// // const cot = "command";
// // const cad = "Git branch";
// // ReactDOM.render(
// //   <React.Fragment>
// //     <h1>
// //       From the {cot} {cad} line
// //     </h1>
// //     ,<p>Open a terminal {cot + "" + cad} window.</p>
// //     <h6>
// //       Choose a {`${cot} ${cad}`} to work in. You can{} either
// //     </h6>
// //   </React.Fragment>,
// //   document.getElementById("root")
// // );

// // import React from "react";
// // import ReactDOM from "react-dom";
// // const currdate = new Date().toLocaleDateString();
// // const currtime = new Date().toLocaleTimeString();

// // ReactDOM.render(
// //   <React.Fragment>
// //     <h1>Hello My name is Lavesh modi </h1>
// //     <h3>today date is = {currdate} </h3>
// //     <p> Timming = {currtime}</p>
// //   </React.Fragment>,
// //   document.getElementById("root")
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// // const heading {
//     // color :'#fa9191'
//     // textTransform :'value'
//     // kebab case = text-transform
//     // camelCase = textTransform
// // }
// const fname = "Lavesh";
// const lname = "Modi ";
// const img1 = "https://picsum.photos/200/30";
// const img2 = "https://picsum.photos/200/300";
// const img3 = "https://picsum.photos/200/300";
// const img4 = "https://picsum.photos/200/300";
// const img5 = "https://github.com/harsh-100";
// const img6 =
//   "https://www.google.co.in/books/edition/Atomic_Habits/fFCjDQAAQBAJ?hl=en&gbpv=1&pg=PT3&printsec=frontcover";
// const img7 = "https://www.w3schools.com/tags/ref_standardattributes.asp";
// ReactDOM.render(
//   <React.Fragment>
//     <h1 contentEditable className="heading">
//       Hii my name is {`${fname}${lname}`} !
//     </h1>
//     <div className="photo">
//       <a href={img5} target="haesh github">
//         <img src={img1} alt="Random img" />
//       </a>
//       <a href={img6} target="Lorem pics">
//         <img src={img2} alt="Random img " />
//       </a>
//       <a href={img7} target="web3">
//         <img src={img3} alt="Random img" />
//         <img src={img4} alt="Random img " />
//       </a>
//     </div>
//   </React.Fragment>,
//   document.getElementById("root")
// );

// mini project of date and wishes
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let currDate = new Date(); // new Date is not write in the new date is not defined
currDate = currDate.getHours(2022, 7, 7, 17);
let greeting = " "; // camelCase issue
const cssStyle = {};

if (currDate >= 1 && currDate < 12) {
  greeting = "Good Morning ";
  cssStyle.color = "green";
} else if (currDate >= 12 && currDate < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "orange";
} // issue in the condition
else greeting = "Good Night ";
cssStyle.color = "blue"; 
ReactDOM.render(
  <React.Fragment>
    <div className="flip">
      <h1>
        Hello sir , {currDate} <span style={cssStyle}> {greeting} </span>
      </h1>
    </div>
  </React.Fragment>,
  document.getElementById("root")
);
