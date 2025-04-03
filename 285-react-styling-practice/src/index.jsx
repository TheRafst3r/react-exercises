//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

import React from "react";
import ReactDOM from "react-dom";

const date = new Date(); // add "2025-04-03T08:00:00" in between parenthesis to change time.
const customStyle = {
  color: "red",
};

function headingFormat() {
  if (date.getHours() < 12) {
    customStyle.color = "red";
    return "Good Morning!";
  } else if (date.getHours() < 18) {
    customStyle.color = "green";
    return "Good Afternoon!";
  } else {
    customStyle.color = "blue";
    return "Good Evening!";
  }
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {headingFormat()}
    </h1>
  </div>,
  document.getElementById("root")
);
