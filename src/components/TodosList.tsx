import  {useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'
import TodoItem from './TodoItem'


  const TodoList: React.FC = () => {
  const { todos, error, isLoading } = useTypedSelector((state) => state.todo)
  const { fetchTodos } = useActions()

  useEffect(() => {
    fetchTodos()
  }, [])

  if (isLoading) {
    return <h1>Идет загрузка...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {todos.map((todo) => 
        <TodoItem key={todo.id} todo={todo} />
      )}
    </div>
  )
}

export default TodoList
