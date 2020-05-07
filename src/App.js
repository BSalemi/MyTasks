import React from 'react';
import TasksContainer from './containers/TasksContainer.js'
import UserContainer from './containers/UserContainer.js'



class App extends React.Component{

  state = {
    loggedInUser: null,
    tasks: []
  }

  updateLoggedInUser = (id) => {
    this.setState({
      loggedInUser: id
    })
  }

  addTask = (task) => {
    this.setState({
      ...this.state,
      tasks: [...this.state.tasks, task]
    })
    return this.state
  }

  render(){
    console.log(this.state.tasks, "tasks")
    return(
      <div id="app" className="tc">
        <h1 className="f1"> My Tasks</h1>
          <TasksContainer addTask={this.addTask} />
          <UserContainer updateLoggedInUser={this.updateLoggedInUser}/>
      </div>
    )
  }
}

export default App;
