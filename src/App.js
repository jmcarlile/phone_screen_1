import "./styles.css";
import { useState } from "react";

// checkbox and text to create each todo
// check todos to indicate completed

// input has button to create each todo and text field

// each li has a checkbox and text to show each todo

export default function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const updateCheckboxValue = (id) => {
    let newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const updateFormText = (e) => {
    setInputText(e.target.value);
    console.log(e.target);
  };

  const createTodo = () => {
    // create a new todo based on current state of input text
    let newTodo = {
      id: todos.length,
      title: inputText,
      completed: false
    };
    // push new todo to todos state variable
    setTodos([...todos, newTodo]);
    setInputText("");
  };

  return (
    <div className="App">
      <h1>Create a Todo:</h1>
      <input
        placeholder="Default Todo Text"
        value={inputText}
        onChange={(e) => updateFormText(e)}
      />
      <button
        onClick={() => {
          createTodo();
        }}
      >
        Submit
      </button>

      <ul>
        {todos.map((todo) => {
          return (
            <div>
              <li key={todo.id}>{todo.title}</li>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => updateCheckboxValue(todo.id)}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
