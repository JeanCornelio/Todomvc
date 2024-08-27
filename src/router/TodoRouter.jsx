import { Route, Routes } from "react-router-dom";
import App from "../App";

export const TodoRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/active" element={<App />} />
      <Route path="/completed" element={<App />} />
    </Routes>
  );
};
