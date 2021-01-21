import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import TaskList from "./components/TaskList"
import "./App.scss"
import TaskInput from "./components/CreateTask"

const App = ({ tasks }) => (
  <div className="app">
    <div className="app__container">
      <div className="app__text">
        <h1 className="app_title">ToDo app</h1>
        <h6>Count task {tasks.length}</h6>
      </div>
      <TaskInput />
      <div className="app__task-container">
        <TaskList />
      </div>
    </div>
  </div>
)

App.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

const mapStateToProps = (state) => ({
  tasks: state.state.tasks,
})

export default connect(mapStateToProps, null)(App)
