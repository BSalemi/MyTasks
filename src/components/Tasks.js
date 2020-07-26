import React from 'react';
import Task from './Task.js'


class Tasks extends React.Component{

    generateTasks = () => {
        const userTasks = this.props.tasks.filter((task) => {
            return task.user_id === parseInt(this.props.currentUser, 10)})
        
         
        const tasksCards = userTasks.map(task => {
            return <Task key={task.id} id={task.id} toDo={task.to_do} completed={task.completed} updateTask={this.props.updateTask} user_id={task.user_id}/>
        })
        return tasksCards
    }

    render(){
        return(
            <div id="tasks">
                {this.generateTasks()}
            </div>
        )
    }
}
export default Tasks