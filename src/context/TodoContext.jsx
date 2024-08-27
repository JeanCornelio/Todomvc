import { createContext, useReducer } from "react";

export const TodoContext = createContext();

const initialState = [];

const todoTypes = {
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  SET_STATE_TODO: "SET_STATE_TODO",
  REMOVE_COMPLETED_TODO: "REMOVE_COMPLETED_TODO",
  CHECKED_ALL_TODO: "CHECKED_ALL_TODO",
};

const todoReducer = (state, action) => {
  const { type, payload } = action;
  const todoListCopy = structuredClone(state);

  switch (type) {
    case todoTypes.ADD_TODO: {
      if (payload.id) {
        //The user wants to edit the todo
        const todoFindIndex = todoListCopy.findIndex(
          (el) => el.id === payload.id
        );

        todoListCopy[todoFindIndex].text = payload.text;

        return todoListCopy;
      }

      const newTodo = {
        id: Math.floor(new Date().valueOf() * Math.random()),
        completed: false,
        text: payload.text,
      };

      return [...state, newTodo];
    }
    case todoTypes.REMOVE_TODO: {
      const todoListWithoutTodo = todoListCopy.filter(
        (el) => el.id !== payload.id
      );

      return todoListWithoutTodo;
    }
    case todoTypes.SET_STATE_TODO: {
      const todoFindIndex = todoListCopy.findIndex(
        (el) => el.id === payload.id
      );

      todoListCopy[todoFindIndex].completed = payload.completed ? true : false;

      return todoListCopy;
    }
    case todoTypes.REMOVE_COMPLETED_TODO: {
      const todoListWithoutTodoCompleted = todoListCopy.filter(
        (el) => !el.completed
      );

      return todoListWithoutTodoCompleted;
    }
    case todoTypes.CHECKED_ALL_TODO: {
      const isTodoUnchecked = todoListCopy.some((el) => !el.completed);

      const checkedAllTodoList = todoListCopy.map((el) => {
        return { ...el, completed: isTodoUnchecked };
      });
      return checkedAllTodoList;
    }
  }
  return state;
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const addToTodo = (todo) =>
    dispatch({
      type: "ADD_TODO",
      payload: todo,
    });
  const removeToTodo = (todo) =>
    dispatch({
      type: "REMOVE_TODO",
      payload: todo,
    });
  const setToTodoState = (todo) =>
    dispatch({
      type: "SET_STATE_TODO",
      payload: todo,
    });
  const removeCompletedTodo = () =>
    dispatch({
      type: "REMOVE_COMPLETED_TODO",
    });
  const checkedAllTodo = () =>
    dispatch({
      type: "CHECKED_ALL_TODO",
    });

  return (
    <TodoContext.Provider
      value={{
        todoList: state,
        addToTodo,
        removeToTodo,
        setToTodoState,
        removeCompletedTodo,
        checkedAllTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
