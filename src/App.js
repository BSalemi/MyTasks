import React from 'react';
import TasksContainer from './containers/TasksContainer.js'
import Clock from './components/Clock'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm.js';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';




class App extends React.Component{

  state = {
    loggedInUser: localStorage.loggedIn,
  }

  updateLoggedInUser = (id) => {
    this.setState({
      loggedInUser: id
    })
  }

  render(){
    const { loggedInUser } = this.state;
    console.log(this.state.loggedInUser)
   
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
            <Route exact path="/login"  render={(routeProps)=> <LoginForm {...routeProps} updateLoggedInUser={this.updateLoggedInUser}/>}/>

            <Link to="/login"><button>Log In</button></Link>

            <Route exact path="/signup" render={(routeProps)=> <SignupForm {...routeProps} updateLoggedInUser={this.updateLoggedInUser}/>}/>

            <Link to="/signup"><button>Sign Up</button></Link>
            </>}

      </div>
    )
  }
}

export default App;
