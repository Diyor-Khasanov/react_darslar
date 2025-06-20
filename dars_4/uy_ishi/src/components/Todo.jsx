import React, { useState, useEffect } from "react";
import "./Todo.scss";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEditing = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const saveEdit = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: editText } : todo))
    );
    setEditId(null);
    setEditText("");
  };

  return (
    <div className="todo">
      <h1>📝 Todo List</h1>
      <div className="input-area">
        <input
          type="text"
          value={input}
          placeholder="Yangi vazifa..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Qo‘shish</button>
      </div>

      <ul className="list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.done ? "done" : ""}>
            {editId === todo.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => saveEdit(todo.id)}>✔️</button>
              </>
            ) : (
              <>
                <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
                <div className="actions">
                  <button onClick={() => startEditing(todo.id, todo.text)}>
                    ✏️
                  </button>
                  <button onClick={() => deleteTodo(todo.id)}>❌</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
