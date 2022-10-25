import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList'
import { v4 as uuidv5 } from 'uuid'

const LOCAL_STORAGE_KEY = 'todoApp.todo'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(()=> {
    const storedTodos = json.parce(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(()=>{
localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  },[todos])

  function handleAddTodo(e){
const name = todoNameRef.current.value
if (name === '') return
setTodos(prevTodo =>{
  return [...prevTodo, {id: uuidv5(), name: name, complete: false}]
})
todoNameRef.current.value = null
  }

  return (
    <>
    <TodoList todos={todos}/>
    <input ref={todoNameRef} type="text" />
    <button onClick={handleAddTodo()}>Add Todo</button>
    <button>Clear Complete</button>
    <div>0 Left to do.</div>
  </>
  )
}

export default App;
