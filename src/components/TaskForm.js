import React from 'react';
import {TASKS_URL} from '../constants.js'


class TaskForm extends React.Component{

    state = {
        task: ""
    }

    handleOnChange = (event) => {
        this.setState({
            task: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        const {task} = this.state
        event.preventDefault();
        if(task.length > 0){
            const toDo = {
                task: task,
                user_id: localStorage.loggedIn
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

    render(){
        return(
            <div>
                <form className="task-form" onSubmit={event => this.handleOnSubmit(event)}>
                    <input type="text" placeholder="What do you have to do?" value={this.state.task} onChange={event => this.handleOnChange(event)}/>
                    <input type="submit" value="Add New Task"/>
                </form>
            </div>
        )
    }

}

export default TaskForm