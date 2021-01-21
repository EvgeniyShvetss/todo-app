import {
  ADD_TASK,
  DELETE_SELECTED_TASK,
  DELETE_TASK,
  RENAME_TODO,
  SELECTED_TASK,
} from "../types/types"

const initialState = {
  tasks: [
    { id: "0", title: "Yor first task", done: false },
    { id: "1", title: "Yor second task", done: false },
    { id: "2", title: "Yor first task", done: false },
  ],
}

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] }

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== action.id),
      }

    case SELECTED_TASK:
      return {
        ...state,
        tasks: state.tasks.map((item) => {
          if (action.payload === item.id) {
            return { ...item, done: !item.done }
          }
          return item
        }),
      }
    case RENAME_TODO:
      return {
        ...state,
        tasks: state.tasks.map((item) => {
          if (action.payload.id === item.id) {
            return { ...item, title: action.payload.text }
          }
          return item
        }),
      }
    case DELETE_SELECTED_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((item) => !item.done),
      }

    default:
      return state
  }
}

export default todoReducer
