import { useContext, useMemo, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { useLocation } from "react-router-dom";

export const useTodoContext = () => {
  const {
    todoList,
    removeToTodo,
    setToTodoState,
    addToTodo,
    removeCompletedTodo,
    checkedAllTodo,
    setTodos,
  } = useContext(TodoContext);
  const [todo, setTodo] = useState("");
  const [todoActive, setTodoActive] = useState({});
  const location = useLocation();

  const todoListActive = useMemo(() => {
    return todoList.filter((el) => !el.completed);
  }, [todoList]);

  const todoListFiltered = useMemo(() => {
    if (location.pathname === "/") return todoList;
    if (location.pathname === "/active")
      return todoList.filter((el) => !el.completed);
      return todoList.filter((el) => el.completed);
  }, [location, todoList]);

  const handleTodo = (e) => {
    setTodo(e.target.value);
  };

  const handleTodoActive = (todo) => {
    setTodoActive(todo);
  };

  const handleChecked = (e, todo) => {
    setToTodoState({ ...todo, completed: e.target.checked });
  };

  const handleSubmit = (e, currentTodo = null) => {
    e.preventDefault();
    const trimmedTodo = todo.trim();

    if (trimmedTodo.length > 0) {
      const newTodo = currentTodo
        ? {
            ...currentTodo,
            text: todo.trim(),
          }
        : {
            completed: false,
            text: todo.trim(),
          };
      addToTodo(newTodo);
      setTodo("");
    }
  };

  const isTodoEmpty = todoList.length === 0;

  return {
    todoListFiltered,
    removeToTodo,
    setToTodoState,
    handleTodoActive,
    handleTodo,
    handleSubmit,
    handleChecked,
    todoActive,
    todoListActive,
    removeCompletedTodo,
    checkedAllTodo,
    todo,
    setTodos,
    isTodoEmpty,
  };
};
