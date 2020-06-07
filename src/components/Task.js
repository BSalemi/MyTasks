import React from 'react';

class Task extends React.Component{

    completeTask = () => {

    }

    undoComplete = () => {

    }

    render(){
        const {id, toDo} = this.props;
        const taskStyling = "tc bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5"
        const buttonStyle = "tc pa1 ma1 br-pill bw"

        return(
            <div id="task" className={taskStyling}>

                <h2>
                    {toDo}
                </h2>
                <p>
                    {this.props.completed ? "Status: Complete" : "Status: Incomplete"}
                </p>
                <div>
                    {this.props.completed ?  <button className={buttonStyle} onClick={event => this.completeTask(event)}>Undo</button> :  <button className={buttonStyle} onClick={event => this.undoComplete(event)}>Complete</button>}
                </div>

            </div>
        )
    }
}

export default Task