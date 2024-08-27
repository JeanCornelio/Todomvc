import ReactDOM from "react-dom/client";
import "./index.css";
import "todomvc-app-css/index.css";
import { TodoProvider } from "./context/TodoContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { TodoRouter } from "./router/TodoRouter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TodoProvider>
    <BrowserRouter>
      <TodoRouter />
    </BrowserRouter>
  </TodoProvider>
);
