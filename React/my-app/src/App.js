// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div classNameName="App">
//       <header classNameName="App-header">
//         <img src={logo} classNameName="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           classNameName="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React from "react";
// import ReactDOM from "react-dom";
// import Heading from "./Heading";
// import List from "./List";

// import Para from "./Para";
// const Fav = "Lavesh";
// const favorg = "React js";

// function App() {
//   return (
//     <>
//       <Heading />
//       <Para />
//       <List />
//       {Fav}
//     </>
//   );
// }

// export default App;

// export { Fav };
// export {favorg};

import "./App.css";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
function App() {
  return (
    <>
      <Navbar tittle="My Pet" Aboutus="Aboutusss" />

      <div className="container">
        <Textform
          heading="Enter the text to analyze "
          inbox="Enter the value  "
        />
      </div>
    </>
  );
}
export default App;
