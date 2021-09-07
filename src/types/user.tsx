export enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
}
interface IFetchUserAction {
  type: UserActionTypes.FETCH_USERS,
}

interface IFetchUserSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS,
  payload: any[]
}

interface IFetchUserErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR,
  payload: null | string
}

export type UserAction = IFetchUserAction | IFetchUserSuccessAction | IFetchUserErrorAction


export interface IUserState {
  users: any[],
  isLoading: boolean,
  error: null | string
}


export interface IUser {
  name: string,
  email: string
}