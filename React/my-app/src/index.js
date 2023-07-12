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
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// let currDate = new Date(); // new Date is not write in the new date is not defined
// currDate = currDate.getHours(2022, 7, 7, 17);
// let greeting = " "; // camelCase issue
// const cssStyle = {};
// let currTime = new Date().toLocaleTimeString();

// if (currDate >= 1 && currDate < 12) {
//   greeting = "Good Morning ";
//   cssStyle.color = "green";
// } else if (currDate >= 12 && currDate < 19) {
//   greeting = "Good Afternoon";
//   cssStyle.color = "orange";
// } // issue in the condition
// else greeting = "Good Night ";
// cssStyle.color = "blue";
// ReactDOM.render(
//   <React.Fragment>
//     <div className="flip">
//       <h1>
//         Hello sir , {currDate} {currTime};
//         <span style={cssStyle}> {greeting} </span>
//       </h1>
//     </div>
//   </React.Fragment>,
//   document.getElementById("root")
// );

// now we are moving on the component

// import React from "react";
// import ReactDom from "react-dom";
// import Heading from "./Heading";
// import List from "./List";

// import Para from "./Para";

// ReactDom.render(
//   <>
//     <Heading />
//     <Para />
//     <List />
//     <p>the top 5 netflix series</p>
//     <ul>
//       <li>Peaky Blender</li>
//       <li>Ozark</li>
//       <li>You</li>
//       <li>Black Mirror</li>
//       <li>The Last Kingdom</li>
//     </ul>
//   </>,
//   document.getElementById("root")
// );
// import App, { favorg } from "./App";

// ReactDom.render(
//   <>
//     <App />,{favorg}
//   </>,
//   document.getElementById("root")
// );
// import React from "react";
// import ReactDOM from "react-dom";
// import {add, divi, mult, sub } from "./Calc";

// ReactDOM.render(
//   <>
//     <ul>
//       <li>sum of two no. is {add(40, 4)}</li>
//       <li>sub of two no. is :{sub(30, 3)}</li>
//       <li>multi of two no. is :{mult(10, 3)}</li>
//       <li>Division of two no. is :{divi(30, 3)}</li>
//     </ul>
//   </>,
//   document.getElementById("root")
// );
// import React from "react";
// import ReactDOM from "react-dom";
// import Card from "./Card";
// import "./index.css";
// import Sdata from "./Sdata";

// we can write the data in the array format import the file in it
// function Card(prop) {
//   return (
//     <>
//       <div className="card1">
//         <div className="card2">
//           <img src={prop.imgsrc} alt="1899" className="img1" />
//           <div className="card_info">
//             <span className="card_platform">{prop.sname}</span>
//             <h1 className="card_tittle">{prop.tittle}</h1>
//             <a href={prop.link} alt="_blank  ">
//               <button>Watch Now</button>
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// cghrfhn


  /* {/* <Card
      imgsrc="https://wallpapercave.com/wp/wp11766166.jpg"
      tittle="1899"
      sname="A Netflix Original Series"
      link="https://www.netflix.com/in/title/80214497?source=35"
    /> */

/* <Card 
      imgsrc={Sdata[0].imgsrc}
      tittle={Sdata[0].tittle}
      sname={Sdata[0].sname}
      link={Sdata[0].link}
    />
    <Card
      imgsrc="https://e0.pxfuel.com/wallpapers/457/603/desktop-wallpaper-season-4-of-ozark-soon-on-netflix.jpg"
      tittle="Ozark"
      sname="A Netflix Original Series"
      link="https://www.netflix.com/in/title/80117552?source=35" */
// </>  ///>
/* <Card
        imgsrc="https://wallpapers.com/images/featured/money-heist-segtwbhffwy01w82.webp"
        tittle="Money Heist "
        sname="A Netflix Original Series"
        link="https://www.netflix.com/in/title/80192098?source=35"
      {/* /> */
// {/* <Card
//   imgsrc="https://w0.peakpx.com/wallpaper/615/720/HD-wallpaper-thomas-shelby-blinders-netflix-peaky-peaky-blinders.jpg"
//   tittle="Peaky Blinders"
//   sname="A Netflix Original Series"
//   link="https://www.netflix.com/in/title/80002479?source=35"
// />

// ReactDOM.render
//   <>
//     <h1 className="heading"> List of Top Five Netflix show in 2023</h1>
//   </>,

//   document.getElementById("root")
// );

// the map() method create new array with result of calling a function for every array element
// array.map(function(currentvalue,index,arr)thisvalue)

// const oldarr = ["Lavesh ","Kumar ","Modi"];
// console.log(oldarr[0])
// console.log(oldarr[1])

// console.log(oldarr[2])

// const newarr = oldarr.map(function (cvalue)
// {
//     return cvalue + "";
// }
// );
// console.log(newarr);

// /

// import React from "react";
// import ReactDOM from "react-dom";
// import Pratice from "./pratice";

// ReactDOM.render(
//   <>
//     <Pratice name="Yashika "></Pratice>
//   </>,
//   document.getElementById("root")
// );


// import React from "react";
// import  ReactDOM  from "react-dom";
//  import Comment from "./comment";
//  import User from "./User";
//  <Comment >,
//  document.getElementById("root") 
// import React,{useState} from "react"
// import  ReactDOM  from "react-dom"

// fuinction click(){


 import React from "react";
import  ReactDOM  from "react-dom";
import App from "./App";
// import "./App";

ReactDOM.render(
  <>
    <App/>
  </>,
  document.getElementById("root")
)
  