import React from 'react';
import TasksContainer from './containers/TasksContainer.js'
import Clock from './components/Clock'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm.js';
import Logout from './components/Logout.js';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';





class App extends React.Component{

  state = {
    currentUserId: localStorage.loggedIn,
    currentUserName: localStorage.user
  }

  updateCurrentUser = (user) => {
    localStorage.loggedIn = user.id
    this.setState({
      currentUserId: user.id,
      currentUserName: user.username
    })
  }

  render(){
    const { currentUserId, currentUserName } = this.state;
  
    return(
      <div id="app" className="tc">

        <h1 id="logo" className="f1"> My Tasks</h1>
          {currentUserId !== undefined ? 
            <>
            <p className="greeting">Hello <strong>{currentUserName}</strong></p>
            <Logout history={this.props.history}/>
            <Clock/>
            <TasksContainer currentUser={this.state.currentUserId} /> 
            </>
          : 
            <>
            <Route exact path="/login"  render={(routeProps) => 
              <div className="credentialsContainer">
                <p>Log In to Create and View Your Tasks</p>
                <LoginForm {...routeProps} updateCurrentUser={this.updateCurrentUser}/>
                <Link to="/signup"> Don't have an account? Create one here.</Link>
              </div>
              }/>

            <Route exact path="/signup" render={(routeProps)=> 
              <div className="credentialsContainer">
                <p>Sign Up to Create Your Task List</p>
                <SignupForm {...routeProps} updateCurrentUser={this.updateCurrentUser}/>
                <Link to="/login">Already have an account? Log in here.</Link>
              </div>
             }/>

           
            <Route exact path="/" render={() => 
              <div>
                <Link to="/signup"><button className="signUpBtn">Sign Up</button></Link>
                <Link to="/login"><button className="logInBtn">Log In</button></Link>
              </div>
            }/>
            </>}
      </div>
    )
  }
}

export default App;
