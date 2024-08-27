import { NavLink } from "react-router-dom";
import { useTodoContext } from "../hooks/useTodoContext";

export const TodoFooter = () => {
  const { isTodoEmpty, removeCompletedTodo, todoListActive } = useTodoContext();

  const routes = [
    {
      id: 1,
      name: "All",
      path: "/",
    },
    {
      id: 2,
      name: "Active",
      path: "/active",
    },
    {
      id: 3,
      name: "Completed",
      path: "/completed",
    },
  ];

  return (
    <>
      {!isTodoEmpty && (
        <footer className="footer">
          {/* <!-- This should be `0 items left` by default --> */}
          <span className="todo-count">
            <strong>{todoListActive.length}</strong> item left
          </span>
          {/* <!-- Remove this if you don't implement routing --> */}
          <ul className="filters">
            {routes.map((route) => (
              <li key={route.id}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "selected" : undefined
                  }
                  to={route.path}
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
          {/*  Hidden if no completed items are left ↓ */}
          <button className="clear-completed" onClick={removeCompletedTodo}>
            Clear completed
          </button>
        </footer>
      )}
    </>
  );
};
