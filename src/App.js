import React from "react"
import { connect } from "react-redux"
import TaskList from "./components/TaskList"
import "./App.scss"
import TaskInput from "./components/CreateTask"

const App = (tasks) => {
  const taskCount = tasks.length
  return (
    <div className="app">
      <div className="app__container">
        <h1 className="app_title">Count task {taskCount}</h1>
        <TaskInput />
        <div className="task-container">
          <TaskList />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  tasks: state.state.tasks,
})

export default connect(mapStateToProps, null)(App)
