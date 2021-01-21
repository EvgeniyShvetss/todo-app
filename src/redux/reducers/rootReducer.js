import { combineReducers } from "redux"
import todoReducer from "./todoReducer"

const rootReducer = combineReducers({
  state: todoReducer,
})

export default rootReducer
