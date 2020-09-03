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
            this.props.updateTask(task)
         })
    }

    render(){
        const {id, toDo, dueDate} = this.props;
        const { loading } = this.state;
        const taskStyling = "tc bg-dwyl-pink dib br3 pa3 ma2 grow bw2 shadow-5"
        const completedStyling = "tc bg-dwyl-lime dib br3 pa3 ma2 grow bw2 shadow-5"
        const undoButton = "tc pa1 ma1 br-pill bw bg-dwyl-pink ba-b--melon"
        const completeButton = "tc pa1 ma1 br-pill bw bg-dwyl-lime ba-b--lime"
        let newDueDate

        if(dueDate !== null){
           let convertedDueDate,
               splitDueDate =  dueDate.split("T")[0].split("-"),
               month = splitDueDate[1] - 1,
               year = splitDueDate[0],
               day = splitDueDate[2]

           convertedDueDate = new Date(year, month, day)
           newDueDate = convertedDueDate.toLocaleDateString()

        }


        return(
            <>
            { loading ? <LoadSpinner /> :
            <div className={this.props.completed? `${completedStyling}` : `${taskStyling}`}>
                <button value={id} onClick={event => this.props.deleteTask(event)}>x</button>
                <h2 className={this.props.completed ? `completed` : undefined}>
                    {toDo}
                </h2>
                {dueDate ? <div><h5>Date Due:</h5> {newDueDate}</div> : null}
                <p>
                    {this.props.completed ? "Status: Complete" : "Status: Incomplete"}
                </p>
                <div>
                    {this.props.completed ?  <button value={id} className={undoButton} onClick={event => this.undoComplete(event)}>Undo</button> :  <button value={id} className={completeButton} onClick={event => this.completeTask(event)}>Complete</button>}
                </div>

            </div>
            }
            </>
        )
    }
}

export default Task