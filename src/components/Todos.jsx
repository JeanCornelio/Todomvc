import { useRef, useState } from "react";
import { useTodoContext } from "../hooks/useTodoContext";

export const Todos = () => {
  const {
    todoList,
    removeToTodo,
    isTodoEmpty,
    setToTodoState,
    handleTodo,
    handleSubmit,
  } = useTodoContext();
  const inputRef = useRef();
  const [todoActive, setTodoActive] = useState({});

  const handleChecked = (e, todo) => {
    setToTodoState({ ...todo, completed: e.target.checked });
  };

  const handleTodoActive = (todo) => {
    setTodoActive(todo);
  };

  const handleTodoUpdate = (e, todo) => {
    inputRef.current.blur();
    handleSubmit(e, todo);
  };

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      {!isTodoEmpty && <label htmlFor="toggle-all">Mark all as complete</label>}
      <ul className="todo-list">
        {/* <!-- These are here just to show the structure of the list items -->
        <!-- List items should get the className `editing` when editing and `completed` when marked as completed --> */}

        {todoList.map((todo) => (
          <li
            className={
              todoActive.id === todo.id
                ? "editing"
                : todo.completed
                ? "completed"
                : ""
            }
            key={todo.id}
          >
            <div className="view">
              <input
                className="toggle"
                onClick={(e) => handleChecked(e, todo)}
                type="checkbox"
                defaultValue="check"
              />
              <label onDoubleClick={() => handleTodoActive(todo)}>
                {todo.text}
              </label>
              <button
                className="destroy"
                onClick={() => removeToTodo(todo)}
              ></button>
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
          </li>
        ))}
      </ul>
    </section>
  );
};
