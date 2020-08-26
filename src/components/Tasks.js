import React from 'react';
import Task from './Task.js';


class Tasks extends React.Component{

    generateTasks = () => {
        // const userTasks = this.props.tasks.filter((task) => {
        //     return task.user_id === parseInt(this.props.currentUser, 10)})
        
        
        const tasksCards = this.props.tasks.map(task => {
            return <Task key={task.id} id={task.id} toDo={task.to_do} completed={task.completed} dueDate={task.due_date} updateTask={this.props.updateTask} deleteTask={this.props.deleteTask} user_id={task.user_id}/>
        })
        return tasksCards
    }

    


    render(){
        const {tasks} = this.props
        return(
            <div id="tasks">
                {tasks.length > 0 ? this.generateTasks() : null }
            </div>
        )
    }
}
export default Tasks