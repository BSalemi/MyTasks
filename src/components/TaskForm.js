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
        event.preventDefault();
        const task = this.state.task

        fetch(TASKS_URL,{ 
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(task)
        })
        .then(res => res.json())
        .then((newTask) => {
            this.props.addTask(newTask)
    }) 
}

    render(){
        return(
            <div id="task-form">
                {localStorage.loggedIn ? 
                    <form>
                        <input type="text" name="What do you have to do?" value={this.state.task} onChange={event => this.handleOnChange(event)}/>
                        <input type="submit" value="Add to List"/>
                    </form>
                : null 
                }    
            </div>
        )
    }

}

export default TaskForm