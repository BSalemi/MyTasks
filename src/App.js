import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskForm from './components/TaskForm.js'

class App extends React.Component{
  render(){
    return(
      <div id="app">
        <TaskForm/>
      </div>
    )
  }
}

export default App;
