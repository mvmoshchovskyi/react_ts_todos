import  { FC } from 'react'
import { ITodo } from '../types/todo'

interface TodoItemProps {
  todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div style={{ border: "2px solid green", padding: "15px" }}>
     title :  {todo.title} 
    </div>
  )
}

export default TodoItem
