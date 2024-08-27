
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'todomvc-app-css/index.css'
import { TodoProvider } from './context/TodoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TodoProvider>
    <App />
  </TodoProvider>
 ,
)
