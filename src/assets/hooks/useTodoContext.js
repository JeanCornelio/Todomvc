import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"


export const useTodoContext = () => {
    const {todoList, removeTodo} = useContext(TodoContext)
  
  
    return {
    todoList,
    removeTodo,
    isTodoEmpty: todoList.length !== 0 ? false : true
  }
}
