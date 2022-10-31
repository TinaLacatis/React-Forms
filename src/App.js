import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function newTitle(event) {
    setTitle(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {title}</h1>
      <form onSubmit={newTitle}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
