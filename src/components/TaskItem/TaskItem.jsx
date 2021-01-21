import React, { useState } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import "./task-item.scss"
import {
  deleteTask,
  selectTask,
  renameTodo,
} from "../../redux/actions/todoAction"

const TaskItem = ({
  title,
  deleteTaskAction,
  id,
  selectTaskAction,
  done,
  renameTodoAction,
}) => {
  const [state, setState] = useState(false)
  const [value, setValue] = useState("")
  const handleChange = ({ target }) => {
    setValue(target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.length >= 1) {
      renameTodoAction(value, id)
      setValue("")
    }
    setState(false)
  }
  return (
    <div className="task-item">
      <div className="task-item__text">
        <div className="task-item__check">
          <input
            type="checkbox"
            checked={done}
            onChange={() => selectTaskAction(id)}
          />
        </div>
        {state ? (
          <form onSubmit={handleSubmit}>
            <input type="text" value={value.title} onChange={handleChange} />
            <button type="submit">
              <i className="fa fa-check" />
            </button>
          </form>
        ) : (
          <div className="task-item__title">{title}</div>
        )}
      </div>
      <div className="task-item__control">
        <button type="button" className="rename" onClick={() => setState(true)}>
          <i className="fa fa-pencil" />
        </button>
        <button
          className="delete"
          type="button"
          onClick={() => deleteTaskAction(id)}
        >
          <i className="fa fa-trash-o" />
        </button>
      </div>
    </div>
  )
}

TaskItem.propTypes = {
  title: PropTypes.string.isRequired,
  deleteTaskAction: PropTypes.func.isRequired,
  selectTaskAction: PropTypes.func.isRequired,
  renameTodoAction: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
}

const mapDispatchToProps = {
  deleteTaskAction: deleteTask,
  selectTaskAction: selectTask,
  renameTodoAction: renameTodo,
}

const mapStateToProps = (state) => ({
  mode: state.mode,
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem)
