import React from "react";
import Contacts from "../contacts.js";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.imgURL} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.phone}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={Contacts[0].name}
        imgURL={Contacts[0].imgURL}
        phone={Contacts[0].phone}
        email={Contacts[0].email}
      />
      <Card
        name={Contacts[1].name}
        imgURL={Contacts[1].imgURL}
        phone={Contacts[1].phone}
        email={Contacts[1].email}
      />
      <Card
        name={Contacts[2].name}
        imgURL={Contacts[2].imgURL}
        phone={Contacts[2].phone}
        email={Contacts[2].email}
      />
    </div>
  );
}

export default App;
