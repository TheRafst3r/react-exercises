import React from "react";
import ReactDOM from "react-dom";

const fName = "Rafa";
const lName = "Medina";
const luckyNumber = 10;

ReactDOM.render(
  <div>
    <h1>Hello {`${fName} ${lName}`}!</h1>
    <p>Your lucky number is {Math.round(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
