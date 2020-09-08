import React from 'react';

class Filter extends React.Component{

    handleOnClick = (e) => {
        const {tasks, filterTasks} = this.props
        if(e.target.value === "completed"){
            const completedTasks = tasks.filter(task => task.completed === true);
            filterTasks(completedTasks)
        } 
        if (e.target.value === "deadlines"){
            const tasksWithDeadlines = tasks.filter(task => task.due_date !== null && task.completed === false);
            const sortedDeadlines = tasksWithDeadlines.sort((a, b) => new Date(a.due_date) - new Date(b.due_date))
            filterTasks(sortedDeadlines)
        }
        if (e.target.value === "no-deadlines"){
            const tasksWithoutDeadlines = tasks.filter(task => task.due_date === null && task.completed === false);
            filterTasks(tasksWithoutDeadlines)
        }
        if(e.target.value === "all"){
            const allTasks = tasks.filter(task => task.completed === false)
            filterTasks(allTasks)
        }
    }
    render(){
        return(
            <div className="filterBar">
                <button onClick={e => this.handleOnClick(e)} value="all">All Tasks</button>
                <button onClick={e => this.handleOnClick(e)} value="deadlines">Tasks With Deadlines</button>
                <button onClick={e => this.handleOnClick(e)} value="no-deadlines">Tasks Without Deadlines</button>
                <button onClick={e => this.handleOnClick(e)} value="completed">Completed Tasks</button>
            </div>
        )
    }
}

export default Filter