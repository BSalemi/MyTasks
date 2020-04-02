import React from 'react';
import './App.css';
import TasksContainer from './containers/TasksContainer.js'
import UserContainer from './containers/UserContainer.js'

class App extends React.Component{

  state = {
    loggedInUser: null
  }

  updateLoggedInUser = (user) => {
    this.setState({
      loggedInUser: user
    })
  }

  render(){
    return(
      <div id="app">
        <TasksContainer/>
        <UserContainer updateLoggedInUser={this.updateLoggedInUser}/>
      </div>
    )
  }
}

export default App;
