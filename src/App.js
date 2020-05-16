import React from 'react';
import TasksContainer from './containers/TasksContainer.js'
import UserContainer from './containers/UserContainer.js'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



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
  }

  render(){
    console.log(localStorage.loggedIn, "loggedIn")
    return(
      <div id="app" className="tc">
        <h1 className="f1"> My Tasks</h1>
          <TasksContainer currentUser={this.state.loggedInUser} addTask={this.addTask}/>
          <UserContainer updateLoggedInUser={this.updateLoggedInUser}/>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/signup" component={SignupForm}/>
      </div>
    )
  }
}

export default App;
