

import { useTodoContext } from "../hooks/useTodoContext";



export const Todos = () => {
  const { todoList,removeTodo,  isTodoEmpty } = useTodoContext();


    const handleChecked = (e)=>{
        console.log(e.target.checked)
        return  e.target.checked ? 'completed' : '' 
    }
    
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      {!isTodoEmpty && (
        <label htmlFor="toggle-all">Mark all as complete</label>
      )}
      <ul className="todo-list">
        {/* <!-- These are here just to show the structure of the list items -->
        <!-- List items should get the className `editing` when editing and `completed` when marked as completed --> */}

        {todoList.map((item) => (
            
         <li className={handleChecked} key={item.id}>
         <div className="view">
           <input className="toggle" onChange={handleChecked} type="checkbox"  />
           <label>{item.todo}</label>
           <button className="destroy" onClick={() => removeTodo(item)}></button>
         </div>
         <input className="edit" value="Create a TodoMVC template" />
       </li>
        ))}

        {/*  <li className="completed">
            <div className="view">
                <input className="toggle" type="checkbox" checked/>
                <label>Taste JavaScript</label>
                <button className="destroy"></button>
            </div>
            <input className="edit" value="Create a TodoMVC template"/>
        </li>
        <li>
            <div className="view">
                <input className="toggle" type="checkbox"/>
                <label>Buy a unicorn</label>
                <button className="destroy"></button>
            </div>
            <input className="edit" value="Rule the web"/>
        </li> */}
        {/*  <li>
            <div className="view">
                <input className="toggle" type="checkbox"/>
                <label>Buy a unicorn</label>
                <button className="destroy"></button>
            </div>
            <input className="edit" value="Rule the web"/>
        </li> */}
      </ul>
    </section>
  );
};
