import { useContext, useState } from "react"
import { TodoContext } from "../context/TodoContext"


export const useAddTodo = () => {
    const [todo, setTodo] = useState('')
    const {addTodo} = useContext(TodoContext)

    const handleTodo = (e) =>{
        setTodo(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        //Diparch action
        addTodo(todo)
        setTodo('')
    }

    
    return{
        handleSubmit,
        handleTodo,
        todo
    }
}
