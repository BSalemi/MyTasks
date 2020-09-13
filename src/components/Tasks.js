import React from 'react';
import Task from './Task.js';


class Tasks extends React.Component{

 
    generateTasks = () => {
        const {tasks, filteredTasks, updateTask, deleteTask, isPastDeadline} = this.props

        if(filteredTasks.length > 0){
            const tasksCards = filteredTasks.map(task => {
                return <Task key={task.id} id={task.id} toDo={task.to_do} completed={task.completed} dueDate={task.due_date} updateTask={updateTask} deleteTask={deleteTask} user_id={task.user_id} isPastDeadline={isPastDeadline}/>
            })
            return tasksCards
        } else {
            const incompleteTasks = tasks.filter(task => task.completed === false && isPastDeadline(task.due_date) === false)
            const tasksCards = incompleteTasks.map(task => {
                return <Task key={task.id} id={task.id} toDo={task.to_do} completed={task.completed} dueDate={task.due_date} updateTask={updateTask} deleteTask={deleteTask} user_id={task.user_id} isPastDeadline={isPastDeadline}/>
            })
            return tasksCards
        }
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