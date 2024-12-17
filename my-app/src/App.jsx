import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const handleButtonClick = () => alert("Button clicked!");
  const handleInputChange = (e) => console.log("Input value:", e.target.value);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome to My React App</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Custom Components</h2>
        <Button text="Click Me" onClick={handleButtonClick} />
        <Input placeholder="Type something..." onChange={handleInputChange} />
      </div>
    </>
  );
}

export default App;
