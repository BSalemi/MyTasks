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
        
        const task = {
            to_do: this.state.task,
            user_id: localStorage.loggedIn
        };

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
            console.log(newTask)
    }) 
}

    render(){
        return(
            <div id="task-form">
                {localStorage.loggedIn ? 
                    <form onSubmit={event => this.handleOnSubmit(event)}>
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