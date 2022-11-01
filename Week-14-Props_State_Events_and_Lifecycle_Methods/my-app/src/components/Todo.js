import React from 'react'

export default function Todo({todo, toggler}) {
    function handleTodoClick(){
        toggler(todo.id)
    }
  return (
    <div>
        <label>
    <input type='checkbox' checked={todo.complete} onChange={handleTodoClick}/>
      {todo.name}
        </label>
    </div>
  )
}
