import React from "react";
import Input from "./Input";

function Login() {
  return (
    <div className="container">
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
// The above code is a functional component in React that renders a login form.
// It includes two input fields for the username and password, and a submit button.
// The component is exported as the default export of the module.
// The form does not have any functionality or state management implemented.
// It is a simple static representation of a login form.
// The component can be used in other parts of the application to display the login form to the user.
