import React from 'react';
import {COMPLETED_URL, UNDO_URL} from '../constants.js'

class Task extends React.Component{

    completeTask = (event) => {
        event.preventDefault();
        let id = event.target.value,
            grandparent = event.target.parentElement.parentElement,
            task = grandparent.children[0]
       

        fetch(COMPLETED_URL, {
            method:'PUT',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                id: id
            }),
        })
        .then((res) => {
            if (!res.ok){
                throw new Error('Something went wrong')
            }
            task.id = "completed"
        })
    }

    undoComplete = (event) => {
        event.preventDefault();
        let id = event.target.value,
            grandparent = event.target.parentElement.parentElement,
            task = grandparent.children[0]

        fetch(UNDO_URL, {
            method:'PUT',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                id: id
            }),
        })
        .then((res) => {
            if (!res.ok){
                throw new Error('Something went wrong')
            }
            task.id = null
        })
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
                    {this.props.completed ?  <button value={id} className={buttonStyle} onClick={event => this.undoComplete(event)}>Undo</button> :  <button value={id} className={buttonStyle} onClick={event => this.completeTask(event)}>Complete</button>}
                </div>

            </div>
        )
    }
}

export default Task