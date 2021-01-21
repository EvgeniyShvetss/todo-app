import React, { useState } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import "./create-task.scss"
import { addTask } from "../../redux/actions/todoAction"

const CreateTask = ({ addTaskAction }) => {
  const [state, setState] = useState({ title: "" })
  const handleChange = ({ target }) => {
    setState({ ...state, title: target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (state.title.length >= 1) {
      addTaskAction(state.title)
      setState({ ...state, title: "" })
    }
  }
  return (
    <div className="create-task">
      <form onSubmit={handleSubmit} className="create-task__form">
        <input
          className="create-task__input"
          value={state.title}
          onChange={handleChange}
          placeholder="Enter new todo"
        />
        <button type="submit" className="create-task__btn">
          add
        </button>
      </form>
    </div>
  )
}

CreateTask.propTypes = {
  addTaskAction: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  addTaskAction: addTask,
}

export default connect(null, mapDispatchToProps)(CreateTask)
