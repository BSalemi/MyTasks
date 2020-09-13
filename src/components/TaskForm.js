import React from 'react';
import {TASKS_URL} from '../constants.js'


class TaskForm extends React.Component{

    state = {
        task: "",
        hasDueDate: false,
        isClicked: false
    }

    handleOnChange = (event) => {
        this.setState({
            task: event.target.value
        })
    }

    handleOnClick = (event) => {
        event.preventDefault()
        this.setState((prevState) => {
            return {
                ...this.state,
                hasDueDate: !prevState.hasDueDate
            }
        })
    }

    handleOnSubmit = (event) => {
        const {task} = this.state,
               dateInput = document.getElementById('due-date-input')

        let dateDue;

        dateInput ? dateDue = dateInput.value : dateDue = ""

        event.preventDefault();

        if(task.length > 0){
            const toDo = {
                task: task,
                user_id: localStorage.loggedIn,
                dueDate: dateDue
            };
            fetch(TASKS_URL,{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(toDo)
            })
            .then(res => res.json())
            .then((newTask) => {
                this.props.addTask(newTask);
            })
            this.setState({
                task: ""
            })
        } else {
            alert("Please enter a task before submitting.")
        }
    }

    toggleTaskForm = () => {
        this.toggleButtonText()
        this.setState((prevState) => {
            return {
                ...this.state,
                isClicked: !prevState.isClicked
            }
        })
    }

    toggleButtonText = () => {
       let formButton = document.querySelector('.toggleForm') 

       formButton.innerText === "Create New Task" ? formButton.innerText = "Close" : formButton.innerText = "Create New Task"
    }

    render(){

       const {hasDueDate, isClicked} = this.state
    
        return(
            <div>
                <button onClick={this.toggleTaskForm} className="toggleForm">Create New Task</button>
                {!isClicked ? null  :
                <>
                <form className="task-form" onSubmit={event => this.handleOnSubmit(event)} >
                    <input type="text" placeholder="What do you have to do?" value={this.state.task} onChange={event => this.handleOnChange(event)}/>
                    <button onClick={event => this.handleOnClick(event)} className="due-date-button">Add Due Date</button>
                    {!hasDueDate ? null : <input type="date" min={new Date().toISOString().split('T')[0]}  id="due-date-input"/>}
                    <input type="submit" value="Add Task" />
                </form> </>
                }
            </div>
        )
    }

}

export default TaskForm