import React from 'react';
import './App.css';
import TasksContainer from './containers/TasksContainer.js'
import UserContainer from './containers/UserContainer.js'

class App extends React.Component{
  render(){
    return(
      <div id="app">
        <TasksContainer/>
        <UserContainer/>
      </div>
    )
  }
}

export default App;
