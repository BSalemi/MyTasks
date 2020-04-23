import React from 'react';
import TaskForm from '../components/TaskForm.js'

class TasksContainer extends React.Component {
    render(){
        return(
            <div id="tasks-container">
                <TaskForm addTask={this.props.addTask}/>
            </div>
        )
    }
}

export default TasksContainer 