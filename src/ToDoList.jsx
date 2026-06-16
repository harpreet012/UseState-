import { useState } from 'react'

function TodoList() {
  const [todos, setTodos] = useState(['Buy groceries', 'Study React'])
  const [input, setInput] = useState('')

  const addTodo = () => {
    if (input.trim() === '') return
    setTodos([...todos, input.trim()])
    setInput('')
  }

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  return (
    <div className="card">
        <h3>📝 To-Do List</h3>
      <p className="card-desc">Add and remove tasks</p>
      <div className="todo-input-row">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a task..."
          className="todo-input"
        />
        <button className="btn green" onClick={addTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, i) => (
          <li key={i} className="todo-item">
            <span>✔ {todo}</span>
            <button className="btn red small" onClick={() => removeTodo(i)}>✕</button>
          </li>
        ))}
        {todos.length === 0 && <p className="empty-text">No tasks yet!</p>}
      </ul>
    </div>
  )
}

export default TodoList