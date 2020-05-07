import React from 'react';
import TaskForm from '../components/TaskForm.js'
import { TASKS_URL } from '../constants.js'

class TasksContainer extends React.Component {

    state = {
        currentUser: this.props.currentUser,
        tasks: []
    }

    componentDidMount(){
        this.fetchTasks()
    }

    fetchTasks = () => {

        fetch(TASKS_URL)
        .then(res => res.json())
        .then(fetchedTasks => this.setState({
            ...this.state,
            tasks: [this.state.fetchedTasks]
        }))
    }


    render(){
        return(
            <div id="tasks-container">
                <TaskForm addTask={this.props.addTask} currentUser={this.state.currentUser} tasks={this.state.tasks}/>
            </div>
        )
    }
}

export default TasksContainer 