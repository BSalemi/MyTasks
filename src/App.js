import React from 'react';
import logo from './logo.svg';
import './App.css';
import TasksContainer from './containers/TasksContainer.js'

class App extends React.Component{
  render(){
    return(
      <div id="app">
        <TasksContainer/>
      </div>
    )
  }
}

export default App;
