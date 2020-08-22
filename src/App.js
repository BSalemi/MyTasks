import React from 'react';
import TasksContainer from './containers/TasksContainer.js'
import Clock from './components/Clock'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm.js';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';




class App extends React.Component{

  state = {
    currentUserId: localStorage.loggedIn,
    currentUserName: null
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
    console.log(currentUserId, currentUserName)
  
    return(
      <div id="app" className="tc">

        <h1 id="logo" className="f1"> My Tasks</h1>
          {currentUserId !== undefined ? 
            <>
            <Clock/>
            <TasksContainer currentUser={this.state.currentUserId} /> 
            </>
          : 
            <>
            <Route exact path="/login"  render={(routeProps) => 
              <div>
                <LoginForm {...routeProps} updateCurrentUser={this.updateCurrentUser}/>
                <Link to="/signup"><button>Sign Up</button></Link>
              </div>
              }/>

            <Route exact path="/signup" render={(routeProps)=> 
              <div>
                <SignupForm {...routeProps} updateCurrentUser={this.updateCurrentUser}/>
                <Link to="/login"><button>Log In</button></Link>
              </div>
             }/>

           
            <Route exact path="/" render={() => 
              <div>
                <Link to="/signup"><button>Sign Up</button></Link>
                <Link to="/login"><button>Log In</button></Link>
              </div>
            }/>
            </>}
      </div>
    )
  }
}

export default App;
