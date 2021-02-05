import React from 'react'
import Todo from './Todo'
import {List} from '@material-ui/core'


export default function TodoList({todos, toggleCompleted, deleteTodo}) {
  return (
    <List>
      {todos.map(todo => (
        <Todo 
          key={todo.id} 
          todo={todo} 
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
        />
      ))}
    </List>
  )
}
