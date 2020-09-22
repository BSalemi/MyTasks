import React from 'react';
import TaskForm from '../components/TaskForm.js';
import Tasks from '../components/Tasks.js';
import Filter from '../components/Filter.js';
import { TASKS_URL } from '../constants.js';
import { LoadSpinner } from '../components/LoadSpinner.js'


class TasksContainer extends React.Component {

    state = {
        currentUser: localStorage.loggedIn,
        tasks: [],
        filteredTasks: [],
        loading: false,
        filterType: ""
    }

    componentDidMount(){
        this.setState( {loading: true }, this.fetchTasks())
    }

    addTask = (task) => {
        this.setState({
          ...this.state,
          tasks: [...this.state.tasks, task],
          filteredTasks: []
        })
    }
    
      updateTask = (updatedTask) => {
        let updatedTasks = this.state.tasks.map(task => {
            if(task.id === updatedTask.id){
                if(task.completed){
                    task.completed = false;
                    return task
                } else {
                    task.completed = true;
                    return task
                }
            } else {
                return task
            }
        });


        this.setState({
            ...this.state,
            tasks: updatedTasks
        })
      }

    fetchTasks = () => {
       
        const currentUser = parseInt(this.state.currentUser)
        fetch(TASKS_URL)
        .then(res => res.json())
        .then(fetchedTasks => {
            let tasks = fetchedTasks.filter((task) => task.user_id === currentUser)
            this.setState({
            ...this.state,
            loading: false,
            tasks: tasks
        })
    })
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
        .then(tasks => {
            this.setState({
                ...this.state,
                tasks: tasks,
                filteredTasks: []
            })
        })
    }

    filterTasks = (tasks) => {
        this.setState({
            ...this.state,
            filteredTasks: tasks
        })
    }

    setFilterType = (event) => {
        this.setState({
          ...this.state,
          filterType: event.target.value 
        })
    }

    filterBy = (string) => {
        const {tasks} = this.state
        let filteredTasks 

        if(tasks){
            switch(string){
                
                case "deadlines":
                    const tasksWithDeadlines = tasks.filter(task => task.due_date !== null && task.completed === false && this.isPastDeadline(task.due_date) === false),
                    sortedDeadlines = tasksWithDeadlines.sort((a, b) => new Date(a.due_date) - new Date(b.due_date))

                    filteredTasks = sortedDeadlines
                    break;
          
                case "no-deadlines":
                    const tasksWithoutDeadlines = tasks.filter(task => task.due_date === null && task.completed === false);

                    filteredTasks = tasksWithoutDeadlines
                    break;
                case "completed":
                    const completedTasks = tasks.filter(task => task.completed === true);

                    filteredTasks = completedTasks
                    break;
                case "overdue":
                    const overdueTasks = tasks.filter(task => this.isPastDeadline(task.due_date) === true && task.completed === false)
                    filteredTasks = overdueTasks
                    break;
                default: 
                    const allTasks = tasks.filter(task => task.completed === false && this.isPastDeadline(task.due_date) === false)
                    
                    filteredTasks = allTasks
            }
            return filteredTasks
        } else {
            filteredTasks = []
            return filteredTasks
        }
    }

    isPastDeadline = (date) => {
        let currentDate = new Date(),
            daysRemaining = Math.round(((Date.parse(date) - Date.parse(currentDate))/1000)/86400)

        if(daysRemaining < 0){
            return true
        } else {
            return false
        }
    }

    render(){
        const { loading, filterType } = this.state,
             filteredTasks = this.filterBy(filterType)
             console.log(filteredTasks, "filteredTasks")
             console.log(this.state.tasks, "tasks")
        return(
            <>
            {loading ? <LoadSpinner /> : 
                <div className="tasks-container">
               
                <TaskForm addTask={this.addTask} tasks={this.state.tasks}/>
                <Filter tasks={this.state.tasks} filterTasks={this.filterTasks} isPastDeadline={this.isPastDeadline} setFilterType={this.setFilterType}/>
                <Tasks tasks={filteredTasks} updateTask={this.updateTask} deleteTask={this.deleteTask} currentUser={this.state.currentUser} isPastDeadline={this.isPastDeadline}/>
                </div>
            }
            </>
            
        )
    }
}

export default TasksContainer 