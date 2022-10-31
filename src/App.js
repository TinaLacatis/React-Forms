import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  function handleChange(event) {
    // console.log(event.target.value);
    setName(event.target.value);
  }
  function newTitle() {
    setTitle(name);
  }

  return (
    <div className="container">
      <h1>Hello {title}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={newTitle}>Submit</button>
    </div>
  );
}
