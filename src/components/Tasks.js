import React from 'react';
import Task from './Task.js';
import {TASKS_URL} from '../constants.js'


class Tasks extends React.Component{

    generateTasks = () => {
        const userTasks = this.props.tasks.filter((task) => {
            return task.user_id === parseInt(this.props.currentUser, 10)})
        
         
        const tasksCards = userTasks.map(task => {
            return <Task key={task.id} id={task.id} toDo={task.to_do} completed={task.completed} dueDate={task.due_date} updateTask={this.props.updateTask} deleteTask={this.deleteTask} user_id={task.user_id}/>
        })
        return tasksCards
    }

    deleteTask = (event) => {
        event.preventDefault()
        const taskId = event.target.value

        fetch(TASKS_URL + '/' + taskId, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                id: taskId,
            }),
        })
        .then(res => res.json())
        .then(this.generateTasks())
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