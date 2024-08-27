import { createContext, useReducer } from "react";

export const TodoContext = createContext();

const initialState = [];

const todoTypes = {
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  SET_STATE_TODO: "SET_STATE_TODO"
};

const todoReducer = (state, action) => {
  const { type, payload } = action;
  const todoListCopy = structuredClone(state)
  switch (type) {
    case todoTypes.ADD_TODO: {

     
      console.log(action)
      if(payload.id){
        //The user wants to edit the todo
        const todoFindIndex = todoListCopy.findIndex(el => el.id === payload.id)
        todoListCopy[todoFindIndex].text = payload.text

        console.log(todoListCopy)
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
      
     
        const todoListWithoutTodo = todoListCopy.filter(el => el.id !== payload.id)

      return todoListWithoutTodo;
    }
    case todoTypes.SET_STATE_TODO: {
        console.log(payload)
    
        const todoFindIndex = todoListCopy.findIndex(el => el.id === payload.id)
        
        todoListCopy[todoFindIndex].completed = payload.completed ? true : false
        
      return todoListCopy;
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
  const removeToTodo  = (todo) =>
    dispatch({
      type: "REMOVE_TODO",
      payload: todo,
    });
  const setToTodoState = (todo) =>
    dispatch({
      type: "SET_STATE_TODO",
      payload: todo,
    });

  return (
    <TodoContext.Provider value={{ todoList: state, addToTodo, removeToTodo , setToTodoState }}>
      {children}
    </TodoContext.Provider>
  );
};
