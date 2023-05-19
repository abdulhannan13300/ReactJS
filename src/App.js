import { useState } from 'react';
import './App.css';
import { Task } from './Task';


function App() {

    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");
    // const [textColor, setTextColor] = useState("black")

    const handleChange = (event) => {
        setNewTask(event.target.value);
    }
    const addTask = () => {
      const task = 
      { 
        id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id + 1 ,
        taskName : newTask,
        isComplete : false,
      }
        setTodoList([...todoList, task])
    }

    const deleteTask = (id) => {
      setTodoList(todoList.filter((task) =>  task.id !== id));
    }
    const markComplete = (id) => {
      setTodoList(
        todoList.map((task) => {
          if ( task.id === id) 
            return {...task, isComplete:true};
          else 
            return task;
        })
      )
    }
  return ( 
    <div className="App"> 
      <div className='AddTask'>
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='List'>
        {todoList.map((task) => {
            return (
              <Task 
                taskName={task.taskName}
                id={task.id}
                isComplete={task.isComplete} 
                deleteTask={deleteTask}
                markComplete={markComplete}
              />
            )
        })}
      </div>
    </div> 
  );
}


export default App;
