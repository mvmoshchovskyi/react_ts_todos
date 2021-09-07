export enum TodoActionTypes {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR"
}
interface IFetchTodoAction {
  type: TodoActionTypes.FETCH_TODOS,
}

interface IFetchTodoSuccessAction {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS,
  payload: any[]
}

interface IFetchTodoErrorAction {
  type: TodoActionTypes.FETCH_TODOS_ERROR,
  payload: null | string
}

export type TodoAction = IFetchTodoAction | IFetchTodoSuccessAction | IFetchTodoErrorAction


export interface ITodoState {
  todos: any[],
  isLoading: boolean,
  error: null | string
}


export interface ITodo {
  title: string,
}