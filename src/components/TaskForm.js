import React from 'react';

class TaskForm extends React.Component{

    state = {
        task: ""
    }

    handleOnChange = (event) => {
        this.setState({
            task: event.target.value
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