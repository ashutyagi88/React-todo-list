import db, { firebaseConfig } from "./firebase.js";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { FormControl, Input, InputLabel } from "@mui/material";
import To_do from "./To_do";
import "./App.css";
import { initializeApp } from "firebase/app";
import {
  addDoc,
  onSnapshot,
  collection,
  query,
  serverTimestamp,
  orderBy,
  where,
} from "firebase/firestore";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const q = query(collection(db, "todos"), orderBy("timestamp", "desc"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      setTodos(querySnapshot.docs.map((doc) => doc.data().text));
    });
  }, []);

  const addToDo = (e) => {
    e.preventDefault();
    addDoc(collection(db, "todos"), {
      text: input,
      timestamp: serverTimestamp(),
    });

    setInput("");
  };
  return (
    <div className="App">
      <h1>Hello World</h1>
      <form>
        <FormControl>
          <InputLabel>Write A To-Do</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addToDo}
          variant="contained"
        >
          Add To-Do
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <To_do text={todo}></To_do>
        ))}
      </ul>
    </div>
  );
}

export default App;
