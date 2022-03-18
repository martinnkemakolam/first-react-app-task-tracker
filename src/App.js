import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Tasks from "./components/Tasks"
import Addtask from "./components/Addtask"
import About from "./components/About"

const App = () => {
    const [showAddtask, setShowaddtask] = useState(false)


    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const getTask = async () => {
            const taskFromserver = await fetchTask()
            setTasks(taskFromserver)
        }

        getTask()
    }, [])
    // fetch task
    const fetchTask = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()

        return data
    }

    const fetchTasks = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()

        return data
    }
//add task
const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(task)
    })

    const data = await res.json()

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = {id, ...task}
    setTasks([...tasks, data])
}
// delete task function
const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE',
    })

    setTasks(tasks.filter((task) => task.id !== id))
}

//toggle add


//TOGLE REMINDER
const toggleReminder = async (id) => {
    const tasktotoggle = await fetchTasks(id)
    const update = {...tasktotoggle, reminder: !tasktotoggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(update),
    })

    const data = await res.json()

    

    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))

    return data
}

    return (
        <Router>
            <div className = "container" >
            <Header onAdd={() => setShowaddtask (!showAddtask)} showAdd={showAddtask}/>
            {showAddtask && <Addtask onAdd={addTask} onAdd={addTask}/>}
            {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'NO TASK TO SHOW'}
            <Route path="/about" component={About} />
            <Footer/>
            </div>
        </Router>
    )
}


export default App