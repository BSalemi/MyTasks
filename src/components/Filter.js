import React from 'react';

class Filter extends React.Component{

    state = {
        filterType: ""
    }



    // handleOnClick = (e) => {
    //     const {tasks, filterTasks, isPastDeadline} = this.props
    //     if(e.target.value === "completed"){
    //         if(tasks){
    //             const completedTasks = tasks.filter(task => task.completed === true);
    //             filterTasks(completedTasks)
    //         }else {
    //             filterTasks([])
    //         }
    //     }
    //     if (e.target.value === "deadlines"){
    //         if(tasks){
    //             const tasksWithDeadlines = tasks.filter(task => task.due_date !== null && task.completed === false && isPastDeadline(task.due_date) === false);
    //             const sortedDeadlines = tasksWithDeadlines.sort((a, b) => new Date(a.due_date) - new Date(b.due_date))
    //             filterTasks(sortedDeadlines)
    //         } else {
    //             filterTasks([])
    //         }
    //     }
    //     if (e.target.value === "no-deadlines"){
    //         if(tasks){
    //             const tasksWithoutDeadlines = tasks.filter(task => task.due_date === null && task.completed === false);
    //             filterTasks(tasksWithoutDeadlines)
    //         } else {
    //             filterTasks([])
    //         }
    //     }
    //     if(e.target.value === "all"){
    //         if(tasks){
    //             const allTasks = tasks.filter(task => task.completed === false && isPastDeadline(task.due_date) === false)
    //             filterTasks(allTasks)
    //         } else {
    //             filterTasks([])
    //         }
    //     }

    //     if(e.target.value === "overdue"){
    //         const overdueTasks = tasks.filter(task => isPastDeadline(task.due_date) === true && task.completed === false)
    //         filterTasks(overdueTasks)
    //     }
    // }
    render(){
       const { setFilterType } = this.props
        return(
            <div className="filterBar">
                <button onClick={e => setFilterType(e)} value="all">All Tasks</button>
                <button onClick={e => setFilterType(e)} value="deadlines">Tasks With Deadlines</button>
                <button onClick={e => setFilterType(e)} value="no-deadlines">Tasks Without Deadlines</button>
                <button onClick={e => setFilterType(e)} value="completed">Completed Tasks</button>
                <button onClick={e => setFilterType(e)} value="overdue">Past Due Tasks</button>
            </div>
        )
    }
}

export default Filter