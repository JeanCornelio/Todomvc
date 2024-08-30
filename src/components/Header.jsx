import { useTodoContext } from "../hooks/useTodoContext";
import { motion } from "framer-motion";


export const Header = () => {
  const { handleSubmit, handleTodo, todo } = useTodoContext();

  return (
    <header className="header">
      <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{duration:1, type:'spring'}}>
        todos
      </motion.h1>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={todo}
          onChange={handleTodo}
          autoFocus
        />
      </form>
    </header>
  );
};
