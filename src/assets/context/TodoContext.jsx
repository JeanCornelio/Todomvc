import { createContext, useReducer } from "react";

export const TodoContext = createContext();

const initialState = [];

const todoTypes = {
  ADD_TODO: "ADD_TODO",
 REMOVE_TODO: "REMOVE_TODO"
};

const todoReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case todoTypes.ADD_TODO: {
      const newTodo = {
        id: Math.floor(new Date().valueOf() * Math.random()),
        todo: payload,
      };

      return [...state, newTodo];
    }
    case todoTypes.REMOVE_TODO: {
      
        const todoListCopy = structuredClone(state)
        const todoListWithoutTodo = todoListCopy.filter(el => el.id !== payload.id)

      return todoListWithoutTodo;
    }
  }

  return state;
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (todo) =>
    dispatch({
      type: "ADD_TODO",
      payload: todo,
    });
  const removeTodo = (todo) =>
    dispatch({
      type: "REMOVE_TODO",
      payload: todo,
    });

  return (
    <TodoContext.Provider value={{ todoList: state, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
