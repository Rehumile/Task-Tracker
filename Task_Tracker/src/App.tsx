//import { useState } from 'react'
 import { Header } from './components/Header'
 import DateCalendarValue from './components/DateCalendarValue';

 import React, {useState} from "react"


interface item {
    id: number;
    text: string;
    completed: boolean;
}

export const App: React.FC = () => {

    const [todos, setTodos] = useState<item[]>([]);

    const [input, setInput] = useState<string>("");


    /*Function to  */
    const handleToggle = (id: number) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return {...todo, completed: !todo.completed};
                }
                return todo
            })
        )

    }

    /*Function to submit the task once "save" button is clickec (adds the task) */
    const handleSaveTask = () => {
        const newTodo = {id: Date.now(), text: input, completed: false};
        setTodos([...todos, newTodo])
        setInput("")
    }
    return (
       <div>
        <Header />
        <div className='main-layout'>
         <div className='main-layout-box'>
          <DateCalendarValue/>
         </div>
         <div className='main-layout-box1'>
           {/*Conditional rendering that will render the task once saved and no task added then a message will appear */}
            {todos.length === 0 ? (
             <h1 className='main-layout-box1-text'>No tasks added</h1>
           ) : (
           <ul>
             {todos.map((todo) => (
             <li
               key={todo.id}
               onClick={() => handleToggle(todo.id)}
               style={{ textDecoration: todo.completed ? "line-through" : "none" }}
              >
               {todo.text}
             </li>
             ))}
            </ul>
          )}
         </div>
   
         <div className='main-layout-box2'>
          <h2 className='main-layout-box2-text'>Add a task</h2>
          <input type="text" placeholder="add item" value={input}
            onChange={(e)=> setInput(e.target.value)}/>
           <button onClick={()=> handleSaveTask()}>Save</button>
         </div>  
        </div>
    </div>
    )
}

/*function App() {


  return (
    <div >
    <Header />
    <div className='main-layout'>
     <div className='main-layout-box'>
      <DateCalendarValue/>
     </div>
    <div className='main-layout-box1'>
      <h2 className='main-layout-box1-text'>Tasks</h2>
    </div>
    <div className='main-layout-box2'>
      <h2 className='main-layout-box2-text'>Add a task</h2>
 
    </div>
    </div>
  </div>
  )
}*/

export default App