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
        loading: false
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
    render(){
        const { loading } = this.state;
        return(
            <>
            {loading ? <LoadSpinner /> : 
                <div className="tasks-container">
               
                <TaskForm addTask={this.addTask} tasks={this.state.tasks}/>
                <Filter tasks={this.state.tasks} filterTasks={this.filterTasks}/>
                <Tasks tasks={this.state.tasks} filteredTasks={this.state.filteredTasks} updateTask={this.updateTask} deleteTask={this.deleteTask} currentUser={this.state.currentUser}/>
                </div>
            }
            </>
            
        )
    }
}

export default TasksContainer 