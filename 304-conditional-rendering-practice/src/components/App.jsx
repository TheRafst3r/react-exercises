import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {userIsRegistered === true ? (
        <Form buttonText="Login" />
      ) : (
        <Form buttonText="Register" />
      )}
    </div>
  );
}

export default App;
