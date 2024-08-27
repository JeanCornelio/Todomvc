import { useTodoContext } from "../hooks/useTodoContext";

export const Header = () => {
  const { handleSubmit, handleTodo, todo } = useTodoContext();

  return (
    <header className="header">
      <h1>todos</h1>
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
