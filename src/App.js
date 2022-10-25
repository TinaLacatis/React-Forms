// import { useState } from "react";
import "./styles.css";

function handleChange(event) {
  console.log(event.target.value);
}
export default function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
      />
      <button>Submit</button>
    </div>
  );
}
