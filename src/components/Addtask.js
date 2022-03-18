import { useState } from 'react'

const Addtask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert("please add a text")
            return
        }

        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control form-control-check'>
                <label for="">Task</label>
                <input type="text" placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label for="">Day & time</label>
                <input type="text" placeholder="Add Day & time"  value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label for="">set reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type='submit' value='save task' className="btn btn-block"/>
        </form>
    )
}

export default Addtask