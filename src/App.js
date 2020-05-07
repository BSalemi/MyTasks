import React from 'react';
import TasksContainer from './containers/TasksContainer.js'
import UserContainer from './containers/UserContainer.js'



class App extends React.Component{

  state = {
    loggedInUser: null,
  }

  updateLoggedInUser = (id) => {
    this.setState({
      loggedInUser: id
    })
  }

  // addTask = (task) => {
  //   this.setState({
  //     ...this.state,
  //     tasks: [...this.state.tasks, task]
  //   })
  //   return this.state
  // }

  render(){
    console.log(this.state, "state app")
    return(
      <div id="app" className="tc">
        <h1 className="f1"> My Tasks</h1>
          <TasksContainer currentUser={this.state.loggedInUser}/>
          <UserContainer updateLoggedInUser={this.updateLoggedInUser}/>
      </div>
    )
  }
}

export default App;
