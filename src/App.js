import React from 'react';
import TasksContainer from './containers/TasksContainer.js'
import UserContainer from './containers/UserContainer.js'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import Clock from './components/Clock'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



class App extends React.Component{

  state = {
    loggedInUser: null,
  }

  updateLoggedInUser = (id) => {
    this.setState({
      loggedInUser: id
    })
  }

  
  render(){
    const { loggedInUser } = this.state;
    return(
      <div id="app" className="tc">

        <h1 id="logo" className="f1"> My Tasks</h1>
          {loggedInUser ? 
            <>
            <Clock/>
            <TasksContainer currentUser={this.state.loggedInUser} /> 
            </>
          :  
            <>
            <UserContainer updateLoggedInUser={this.updateLoggedInUser}/>
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/signup" component={SignupForm}/>
            </>}
      </div>
    )
  }
}

export default App;
