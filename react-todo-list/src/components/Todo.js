import React from 'react'
import {Checkbox, IconButton, ListItem, Typography} from '@material-ui/core'
import CloseIcon from "@material-ui/icons/Close";

export default function Todo({todo, toggleCompleted, deleteTodo}) {

  const handleCheckboxClick = e => {
    toggleCompleted(todo.id)
  }

  const handleDeleteClick = e => {
    deleteTodo(todo.id)
  }

  return (
    <ListItem style={{display: 'flex'}}>
      <Checkbox
        checked={todo.checked}
        onClick={handleCheckboxClick}/>
      <Typography
        variant='body1'
        style={{
          textDecoration: todo.completed ? 'line-through' : null
      }}>{todo.task}</Typography>
      <IconButton onClick={handleDeleteClick}><CloseIcon/></IconButton>
    </ListItem>
  )
}
