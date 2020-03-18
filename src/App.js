import React from 'react';
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
