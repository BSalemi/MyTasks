import React from 'react';
import Task from './Task.js';


class Tasks extends React.Component{

 
    generateTasks = () => {
        const filteredTasks = this.props.tasks.filter(task => task.due_date === null && task.completed === false)
        const tasksCards = filteredTasks.map(task => {
            return <Task key={task.id} id={task.id} toDo={task.to_do} completed={task.completed} dueDate={task.due_date} updateTask={this.props.updateTask} deleteTask={this.props.deleteTask} user_id={task.user_id}/>
        })
        return tasksCards
    }

    generateTasksWithDeadlines = () => {
        const filteredTasks = this.props.tasks.filter(task => task.due_date !== null && task.completed === false)
        const sortedTasks = filteredTasks.sort((a, b) => Date.parse(a.due_date) - Date.parse(b.due_date))
        console.log(sortedTasks, "sorted")
        const tasksCards = sortedTasks.map(task => {
            return <Task key={task.id} id={task.id} toDo={task.to_do} completed={task.completed} dueDate={task.due_date} updateTask={this.props.updateTask} deleteTask={this.props.deleteTask} user_id={task.user_id}/>
        })
        return tasksCards
    }

    generateCompletedTasks = () => {
        const filteredTasks = this.props.tasks.filter(task => task.completed === true)
        const tasksCards = filteredTasks.map(task => {
            return <Task key={task.id} id={task.id} toDo={task.to_do} completed={task.completed} dueDate={task.due_date} updateTask={this.props.updateTask} deleteTask={this.props.deleteTask} user_id={task.user_id}/>
        })
        return tasksCards
    }


    render(){
        const {tasks} = this.props
        const tasksWithDates = tasks.filter(task => task.due_date !== null),
              tasksWithNoDates = tasks.filter(task => task.due_date === null),
              completedTasks = tasks.filter(task => task.completed === true)
        

        return(
            <div id="tasks">
                {tasksWithDates.length > 0 ? (
                <><h3>High Priority:</h3> {this.generateTasksWithDeadlines()}</>)
                 : null }
                {tasksWithNoDates.length > 0 ? (
                <><h3>At Your Leisure:</h3>{this.generateTasks()}</>)
                 : null}
                 {completedTasks.length > 0 ? (
                <><h3>Completed:</h3>{this.generateCompletedTasks()}</>)
                 : null}
            </div>
        )
    }
}
export default Tasks