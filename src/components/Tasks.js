import React from 'react';
import Task from './Task.js';


class Tasks extends React.Component{

 
    generateTasks = () => {
        const {tasks, updateTask, deleteTask, isPastDeadline} = this.props

        const tasksCards = tasks.map(task => {
            return <Task key={task.id} id={task.id} toDo={task.to_do} completed={task.completed} dueDate={task.due_date} updateTask={updateTask} deleteTask={deleteTask} user_id={task.user_id} isPastDeadline={isPastDeadline}/>
        })
        return tasksCards
    }


    render(){
        const {tasks} = this.props

        return(
            <div className="tasks">
                {tasks.length > 0 ? (
                    this.generateTasks()
                ) : null }
            </div>
        )
    }
}
export default Tasks