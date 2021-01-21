import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import TaskItem from "../TaskItem"
import { deleteSelectedTask } from "../../redux/actions/todoAction"
import "./task-list.scss"

const TaskList = ({ tasks, deleteSelectedTaskAction }) => {
  const doneTasks = tasks.filter((item) => item.done)
  return (
    <div className="task-list">
      <div className="task-list__item">
        {tasks.map((task) => (
          <TaskItem
            title={task.title}
            id={task.id}
            key={task.id}
            done={task.done}
          />
        ))}
      </div>
      {doneTasks.length > 0 && (
        <button type="button" onClick={() => deleteSelectedTaskAction()}>
          <i className="fa fa-trash-o" />
        </button>
      )}
    </div>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
  deleteSelectedTaskAction: PropTypes.func.isRequired,
}
const mapDispatchToProps = {
  deleteSelectedTaskAction: deleteSelectedTask,
}

const mapStateToProps = (state) => ({
  tasks: state.state.tasks,
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
