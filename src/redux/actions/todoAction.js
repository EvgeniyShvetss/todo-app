import {
  ADD_TASK,
  DELETE_SELECTED_TASK,
  DELETE_TASK,
  RENAME_TODO,
  SELECTED_TASK,
} from "../types/types"

export function addTask(title) {
  return {
    type: ADD_TASK,
    payload: {
      id: Date.now().toString(),
      title,
      done: false,
    },
  }
}

export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    id,
  }
}

export function selectTask(id) {
  return {
    type: SELECTED_TASK,
    payload: id,
  }
}
export function renameTodo(text, id) {
  return {
    type: RENAME_TODO,
    payload: {
      text,
      id,
    },
  }
}

export function deleteSelectedTask() {
  return {
    type: DELETE_SELECTED_TASK,
  }
}
