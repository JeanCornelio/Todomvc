import { useRef } from "react";
import { useTodoContext } from "../hooks/useTodoContext";
import {  motion, Reorder } from "framer-motion";

const variants = {

  hidden: {
    opacity: 0,
  },
  visible: ({ delay }) => ({
    opacity: 1,
  
    transition: {
      delay,
      duration: 1,
    },
  }),
};

export const Todos = () => {
  const {
    removeToTodo,
    isTodoEmpty,
    todoActive,
    handleTodoActive,
    handleChecked,
    handleTodo,
    handleSubmit,
    todoListFiltered,
    checkedAllTodo,
    setTodos
  } = useTodoContext();

  const inputRef = useRef();

  const handleTodoUpdate = (e, todo) => {
    inputRef.current.blur();
    handleSubmit(e, todo);
  };

  return (
    <motion.section className="main" layout>
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      {!isTodoEmpty && (
        <label htmlFor="toggle-all" onClick={checkedAllTodo}>
          Mark all as complete
        </label>
      )}
     
        <Reorder.Group className="todo-list" axis="y" values={todoListFiltered}   onReorder={setTodos}>
       
            {/* <!-- These are here just to show the structure of the list items -->
        <!-- List items should get the className `editing` when editing and `completed` when marked as completed --> */}

            {todoListFiltered.map((todo, index) => (
            
                <Reorder.Item
                  className={
                    todoActive.id === todo.id
                      ? "editing"
                      : todo.completed
                      ? "completed"
                      : undefined
                  }
                  style={{background:'white'}}
                  custom={{ delay: (index + 1) * 0.1 }}
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  exit="hidden"
                  layout={todo.id}
                  value={todo}
                  key={todo.id}
                >
                  <div className="view">
                    <input
                      className="toggle"
                      onClick={(e) => handleChecked(e, todo)}
                      checked={todo.completed}
                      type="checkbox"
                      readOnly
                      defaultValue="check"
                    />
                    <label onDoubleClick={() => handleTodoActive(todo)}>
                      {todo.text}
                    </label>
                    <motion.button
                      className="destroy"
                      whileTap={{ scale: 0.9 }}
                      whileHover={{ cursor: "pointer", scale: 1.2 }}
                      onClick={() => removeToTodo(todo)}
                    ></motion.button>
                  </div>
                  {todoActive.id === todo.id && (
                    <form onSubmit={(e) => handleTodoUpdate(e, todo)}>
                      <input
                        ref={inputRef}
                        className="edit"
                        autoFocus
                        onChange={handleTodo}
                        onBlur={() => {
                          handleTodoActive({});
                        }}
                        defaultValue={todo.text}
                      />
                    </form>
                  )}
                </Reorder.Item>
             
            ))}
         
        </Reorder.Group>
      
    </motion.section>
  );
};
