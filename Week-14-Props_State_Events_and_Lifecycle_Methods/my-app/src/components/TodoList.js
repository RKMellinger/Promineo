import React from 'react'
import Todo from './Todo'

export default function TodoList({todo, toggler}) {
  return (
    todo.map(todo => {
        return<Todo key={todo.id} toggler={toggler} todo={todo}/>
    })
  )
}
