import React, {useState, useRef, useEffect} from "react";
import TodoList from "./components/TodoList";
import {} from "react-bootstrap"
import Login from "./components/Login";
import Validate from "./context/Validate";
 
export default App;


const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todo, setTodos] = useState([]) 
  const todoNameRef = useRef()

  useEffect(()=> {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])  

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todo))
  }, [todo])  

  function toggler(id){
    const newTodos = [...todo]
    let todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }  

  function handleAddTodo(e){
const name = todoNameRef.current.value    
if (name === '') return 
setTodos(prevTodos => {

  return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
})  
console.log(todo.id)

todoNameRef.current.value = null
  }

  return (
    <>
    <TodoList todo = {todo} toggler={toggler}/>
    <input ref={todoNameRef} type='test'/>
    <button onClick={handleAddTodo}>Add</button>
    <button>Clear</button>
    <div> Remaining 0</div>
    </>  
  )
}  

