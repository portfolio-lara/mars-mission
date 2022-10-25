import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
// Importing React Hooks
import { useState, useEffect } from 'react';
// Importing Packages
import { v4 as uuidv4 } from 'uuid';

function App() {
    // All States
    const [loading, setloading] = useState(true); // Pre-loader before page renders
    const [tasks, setTasks] = useState([]); // Task State
    const [showAddTask, setShowAddTask] = useState(false); // To reveal add task form
    const [img, setImg] = useState();

    const imageURL = 'https://source.unsplash.com/random/800x600/?mars';

    const fetchImage = async () => {
        const res = await fetch(imageURL);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);
      };

      useEffect(() => {
        fetchImage();
      }, []);

    // Fetching from Local Storage
    const getTasks = JSON.parse(localStorage.getItem("taskAdded"));
    useEffect(() => {
        if (getTasks == null) {
            setTasks([])
        } else {
            setTasks(getTasks);
        }
    }, [])
    // Add Task
    const addTask = (task) => {
        const id = uuidv4();
        const newTask = { id, ...task }
        setTasks([...tasks, newTask]);
      
        localStorage.setItem("taskAdded", JSON.stringify([...tasks, newTask]));
    }
    // Delete Task
    const deleteTask = (id) => {
        const deleteTask = tasks.filter((task) => task.id !== id);
        setTasks(deleteTask);
      
        localStorage.setItem("taskAdded", JSON.stringify(deleteTask));
    }
    // Edit Task
    const editTask = (id) => {
        const title = prompt("Task Title");
        const taskdesc = prompt("Task Description");
        const createdby = prompt("Task Creator");
        const assignedto = prompt("Assign this to someone");
          let data = JSON.parse(localStorage.getItem('taskAdded'));
          const myData = data.map(x => {
              if (x.id === id) {
                  return {
                      ...x,
                      title: title,
                taskdesc:taskdesc,
                createdby:createdby,
                assignedto:assignedto,
                      id: uuidv4()
                  }
              }
              return x;
          })
          localStorage.setItem("taskAdded", JSON.stringify(myData));
          window.location.reload();
      }
    return (
        <>
            {
                
                <div className="container">
                <div className="fixed-top"> 
                <h1>Itsy bitsy teeny weeny rock collecting mars machiney</h1> 
                </div>
              
                <div className="mainContent">
                <div className="goingHere">
               <img src={img} alt="icons" />
               </div>
                  <Header showForm={() => setShowAddTask(!showAddTask)} changeTextAndColor={showAddTask} />
                  {showAddTask && <AddTask onSave={addTask} />}
                  
                  {
                      tasks.length > 0 ?
                          (<Tasks tasks={tasks} onDelete={deleteTask} onEdit={editTask} />) :
                          ('Add your first task')
                  }
                  </div>
                  <div className="mySidePiece">
                  <h3>Number of Tasks: {tasks.length}</h3>
                  <button className="btn">Delete all tasks</button>
                  </div>
              </div>
            }
        </>
    )
}
export default App;
