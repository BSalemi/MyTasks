import React from 'react';
import {COMPLETED_URL, UNDO_URL} from '../constants.js'
import { LoadSpinner } from './LoadSpinner.js'

class Task extends React.Component{

    state = {
        loading: false 
    }

    completeTask = (event) => {
        event.preventDefault();
        let id = event.target.value;

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
        .then(res => res.json())
        .then(task => {
           this.props.updateTask(task)
        })
    }

    undoComplete = (event) => {
        event.preventDefault();
        let id = event.target.value;
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
        .then(res => res.json())
        .then(task => {
            console.log(task, "task after promise")
            this.props.updateTask(task)
         })
    }

    render(){
        const {id, toDo} = this.props;
        const { loading } = this.state;
        const taskStyling = "tc bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5"
        const buttonStyle = "tc pa1 ma1 br-pill bw"

        return(
            <>
            { loading ? <LoadSpinner /> :
            <div className={taskStyling}>
                <h2 className={this.props.completed ? "completedTask" : undefined}>
                    {toDo}
                </h2>
                <p>
                    {this.props.completed ? "Status: Complete" : "Status: Incomplete"}
                </p>
                <div>
                    {this.props.completed ?  <button value={id} className={buttonStyle} onClick={event => this.undoComplete(event)}>Undo</button> :  <button value={id} className={buttonStyle} onClick={event => this.completeTask(event)}>Complete</button>}
                </div>

            </div>
            }
            </>
        )
    }
}

export default Task