import React from 'react';
import TaskForm from '../components/TaskForm.js'
import Tasks from '../components/Tasks.js'
import { TASKS_URL } from '../constants.js'

class TasksContainer extends React.Component {

    state = {
        currentUser: localStorage.loggedIn,
        tasks: []
    }

    componentDidMount(){
        this.fetchTasks()
    }

    addTask = (task) => {
        this.setState({
          ...this.state,
          tasks: [...this.state.tasks, task]
        })
        return this.state.tasks
      }
    

    fetchTasks = () => {

        fetch(TASKS_URL)
        .then(res => res.json())
        .then(fetchedTasks =>
            this.setState({
            ...this.state,
            tasks: fetchedTasks
        }))
    }


    render(){
        
        return(
            <div id="tasks-container">
                <TaskForm addTask={this.addTask} tasks={this.state.tasks}/>
                <Tasks tasks={this.state.tasks}/>
            </div>
        )
    }
}

export default TasksContainer 