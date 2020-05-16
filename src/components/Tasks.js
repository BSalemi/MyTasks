import React from 'react';
import Task from './Task.js'


class Tasks extends React.Component{

    constructor(props){
        super(props)

    }
    generateTasks = () => {
        const tasksCards = this.props.tasks.map(task => {
            return <Task key={task.id} id={task.id} toDo={task.to_do} completed={task.completed}/>
        })
        return tasksCards
    }

    render(){
        console.log(this.props, "props in Tasks")
        return(
            <div id="tasks">
                {this.generateTasks()}
            </div>
        )
    }
}
export default Tasks