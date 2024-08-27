import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export const useTodoContext = () => {
  const { todoList, removeToTodo, setToTodoState, addToTodo } =
    useContext(TodoContext);
  const [todo, setTodo] = useState("");

  const handleTodo = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e, currentTodo = null) => {
    e.preventDefault();

    if (todo && todo.trim().length > 0) {
      if (currentTodo) {
        addToTodo({
          ...currentTodo,
          text: todo.trim(),
        });
      } else {
        const newTodo = {
          completed: false,
          text: todo.trim(),
        };
        addToTodo(newTodo);
      }

      setTodo("");
    }
  };

  return {
    todoList,
    removeToTodo,
    setToTodoState,
    handleTodo,
    handleSubmit,

    todo,

    isTodoEmpty: todoList.length !== 0 ? false : true,
  };
};
