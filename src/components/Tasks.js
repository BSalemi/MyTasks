import React from 'react';
import Task from './Task.js'


class Tasks extends React.Component{

    generateTasks = () => {
        const tasksCards = this.props.tasks.map(task => {
            return <Task key={task.id} id={task.id} toDo={task.to_do} completed={task.completed}/>
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