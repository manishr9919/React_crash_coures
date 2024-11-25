import "./App.css";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function FetchData() {
  const [users, setUsers] = useState([]);

  async function GateUserData() {
    let res = await axios("https://jsonplaceholder.org/users");
    // console.log(res.data);
    setUsers(res.data);
    console.log(users);
  }

  useEffect(() => {
    GateUserData();
  }, []);

  return (
    <div>
      {users.map((user, i) => (
        <div
          key={user.id}
          className="user-card"
          style={{
            border: "1px solid red",
            margin: "30px",
            padding: "30px",
            width: "200px",
            height: "200px",
          }}
        >
          <h3>{user.id}</h3>
          <h2> Name :{user.firstname}</h2>
          <h1>{user.lastname} </h1>
          <h4>{user.email}</h4>
        </div>
      ))}
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <FetchData />

      <h1>hello</h1>
    </div>
  );
}

export default App;
