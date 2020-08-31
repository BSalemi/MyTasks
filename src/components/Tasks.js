import React from 'react';
import Task from './Task.js';


class Tasks extends React.Component{

    state = {
        tasksWithDates: [],
        tasks: []
    }

    componentDidMount(){
        this.sortTasks()
    }

    sortTasks = () => {

        const deadlineTasks = this.props.tasks.filter(task => task.due_date !== null);
        const tasksWithoutDeadline = this.props.tasks.filter(task => task.due_date === null)
        
        this.setState({
            tasksWithDates: deadlineTasks,
            tasks: tasksWithoutDeadline
        })
    }
    generateTasks = () => {

        const tasksCards = this.state.tasks.map(task => {
            return <Task key={task.id} id={task.id} toDo={task.to_do} completed={task.completed} dueDate={task.due_date} updateTask={this.props.updateTask} deleteTask={this.props.deleteTask} user_id={task.user_id}/>
        })
        return tasksCards
    }

    generateTasksWithDeadlines = () => {
        const tasksCards = this.state.tasksWithDates.map(task => {
            return <Task key={task.id} id={task.id} toDo={task.to_do} completed={task.completed} dueDate={task.due_date} updateTask={this.props.updateTask} deleteTask={this.props.deleteTask} user_id={task.user_id}/>
        })
        return tasksCards
    }


    render(){
        const {tasks, tasksWithDates} = this.state
        console.log(this.state, "state")

        return(
            <div id="tasks">
                {tasksWithDates.length > 0 ? (
                <><h3>High Priority:</h3> {this.generateTasksWithDeadlines()}</>)
                 : null }
                {tasks.length > 0 ? (
                <><h3>At Your Leisure:</h3>{this.generateTasks()}</>)
                 : null}
            </div>
        )
    }
}
export default Tasks