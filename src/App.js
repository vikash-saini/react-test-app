import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState("");
  return (
    <div className="App">
      <img
        height="200px"
        src="https://cdn.siasat.com/wp-content/uploads/2023/05/RK-AI-780x470.jpg"
        alt="AI generated Image"
      />
      <br />
      <p>let's code</p>
      <br />
      <input
        type="text"
        placeholder="enter username"
        name="Username"
        id="userId"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      Click me{" "}
      <button onClick={() => setData("updated data")}>update Code</button>
      <br />
      <h2>{data}</h2>
    </div>
  );
}

export default App;
