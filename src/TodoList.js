import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuid } from "uuid";

const TodoList = () => {
  const INITIAL_STATE = [
    {
      todo: "Write more code",
      id: uuid()
    },
  ];
  const [todos, setTodos] = useState(INITIAL_STATE);

  const addTodo = (todo) => {
    let newTodo = { ...todo, id: uuid() };
    setTodos((todos) => [...todos, newTodo]);
  };

  const update = (id, updatedTodo) => {
    setTodos(todos => todos.map(todo => 
        todo.id === id ? {...todo, todo: updatedTodo} : todo
        )
    );
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="content">
      <div className="NewTodoForm">
        <NewTodoForm addTodo={addTodo} />
      </div>
      <div className="TodoList">
        {todos.map(({ todo, id }) => (
          <Todo todo={todo} removeTodo={removeTodo} update={update} key={id} id={id}/>
        ))}
      </div>
    </div>
  );
};

export default TodoList