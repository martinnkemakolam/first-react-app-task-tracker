import {FaTimes} from 'react-icons/fa'

export const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`event ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>onToggle(task.id)}>
        <h3>{task.text}{''} <FaTimes style={{color: "red", cursor: "pointer"}} onClick={()=> onDelete(task.id)} /></h3>
        <p>{task.day}</p>
    </div>
  )
}


export default Task
