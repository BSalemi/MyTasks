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


    isNearDeadline = (date) => {

        let currentDate = new Date(),
            daysRemaining = Math.abs(Math.round(((Date.parse(currentDate) - Date.parse(date))/1000)/86400))

        if(daysRemaining >= 0 && daysRemaining <= 7){
            return true 
        } else {
            return false 
        }
    }

    isPastDeadline = (date) => {
        let currentDate = new Date(),
            daysRemaining = Math.round(((Date.parse(date) - Date.parse(currentDate))/1000)/86400)

        if(daysRemaining < 0){
            return true
        } else {
            return false
        }
    }


    render(){
        const {id, toDo, dueDate, completed, deleteTask} = this.props,
              { loading } = this.state,
              undoButton = "tc pa1 ma1 br-pill bw bg-dwyl-pink ba-b--melon",
              completeButton = "tc pa1 ma1 br-pill bw bg-dwyl-lime ba-b--lime"
        let newDueDate,
            isOverdue = false,
            taskClass = "completed task"

        if(!completed){
            if(dueDate){
               let convertedDueDate,
               splitDueDate =  dueDate.split("T")[0].split("-"),
               month = splitDueDate[1] - 1,
               year = splitDueDate[0],
               day = splitDueDate[2]

               convertedDueDate = new Date(year, month, day)
               newDueDate = convertedDueDate.toLocaleDateString()

                if(this.isPastDeadline(dueDate)){
                    taskClass = "overdue task"
                    isOverdue = true
                } else if(this.isNearDeadline(dueDate)){
                    taskClass = "incomplete task high-alert"
                } else {
                    taskClass = "incomplete task"
                }
            } else {
                taskClass = "incomplete task"
            }

        }

        return(
            <>
            { loading ? <LoadSpinner /> :
            <div className={`${taskClass}`}>
                <button value={id} onClick={event => deleteTask(event)}>x</button>
                <h2>
                    {toDo}
                </h2>

                {dueDate ? (
                <p className={this.isNearDeadline(dueDate) && !completed ? " highlight-deadline date" : "date"}><strong>Due:</strong> {newDueDate}</p>
                )
                : null}



                <p>
                    {completed ? "Status: Complete" : "Status: Incomplete"}
                </p>
                {isOverdue ? null : 
                <div>
                    {completed ?  <button value={id} className={undoButton} onClick={event => this.undoComplete(event)}>Undo</button> :  <button value={id} className={completeButton} onClick={event => this.completeTask(event)}>Complete</button>}
                </div>
                }
            </div>
            }
            </>
        )
    }
}

export default Task