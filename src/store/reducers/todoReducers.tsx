import { ITodoState, TodoAction, TodoActionTypes } from '../../types/todo'

const initialState: ITodoState = {
  todos: [],
  isLoading: false,
  error: null
}

export const todoReducer = (state = initialState, action: TodoAction): ITodoState => {

  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return {
        isLoading: true, error: null, todos: []
      }
    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return {
        isLoading: false, error: null, todos: action.payload
      }
    case TodoActionTypes.FETCH_TODOS_ERROR:
      return {
        isLoading: false, error: action.payload, todos: []
      }
    default:
      return state
  }
}