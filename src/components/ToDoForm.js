import React, {useState} from 'react'

const ToDoForm = ({addTodo}) => {
  const [value, setvalue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setvalue("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='TodoForm'>
        <input type='text' className='todo-input' value={value} placeholder='What is the task today?' onChange={(e) => setvalue(e.target.value)}></input>
        <button type='submit' className='todo-btn'>Add Task</button>
      </form>
    </div>
  )
}

export default ToDoForm
