import { combineReducers } from "redux";
import { userReducer } from "./userReducers";
import { todoReducer} from './todoReducers'

export const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>

