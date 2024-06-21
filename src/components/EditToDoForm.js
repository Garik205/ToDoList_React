import React, {useState} from 'react'

const EditToDoForm = ({editTodo, task}) => {
  const [value, setvalue] = useState(task.task)

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setvalue("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='TodoForm'>
        <input type='text' className='todo-input' value={value} placeholder='Update Task' onChange={(e) => setvalue(e.target.value)}></input>
        <button type='submit' className='todo-btn'>Update Task</button>
      </form>
    </div>
  )
}

export default EditToDoForm
