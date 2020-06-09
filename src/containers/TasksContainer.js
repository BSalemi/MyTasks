import React from 'react';
import TaskForm from '../components/TaskForm.js'
import Tasks from '../components/Tasks.js'
import { TASKS_URL } from '../constants.js'

class TasksContainer extends React.Component {

    state = {
        currentUser: localStorage.loggedIn,
        tasks: []
    }

    componentDidMount(){
        this.fetchTasks()
    }

    addTask = (task) => {
        this.setState({
          ...this.state,
          tasks: [...this.state.tasks, task]
        })
        return this.state.tasks
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

            console.log(updatedTasks, "updatedTasks")

          this.setState({
              ...this.state,
              tasks: updatedTasks
          })
      }
      //updateTask
      //filter state tasks to find task with same id
      //set that filtered task equal to the newly updated task
      //push that updated task back into state

    fetchTasks = () => {

        fetch(TASKS_URL)
        .then(res => res.json())
        .then(fetchedTasks =>
            this.setState({
            ...this.state,
            tasks: fetchedTasks
        }))
    }


    render(){
        console.log(this.state.tasks, "tasks")
        return(
            <div id="tasks-container">
                <TaskForm addTask={this.addTask} tasks={this.state.tasks}/>
                <Tasks tasks={this.state.tasks} updateTask={this.updateTask}/>
            </div>
        )
    }
}

export default TasksContainer 