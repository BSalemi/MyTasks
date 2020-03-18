import React from 'react';

class TaskForm extends React.Component{

    render(){
        return(
            <div id="task-form">
                <form>
                    <input type="text" name="What do you have to do?"/>
                    <input type="submit" value="Add to List"/>
                </form>
            </div>
        )
    }

}

export default TaskForm