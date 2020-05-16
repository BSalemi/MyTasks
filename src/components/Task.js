import React from 'react';

class Task extends React.Component{

    render(){
        const {id, toDo, completed} = this.props;
        console.log(this.props.completed, "task props")
        return(
            <div id="task" className="tc bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5">
               
                <h2>
                    {toDo}
                </h2>
                <p>
                    {{completed} ? "Status - Incomplete" : "Status - Complete"}
                </p>

            </div>
        )
    }
}

export default Task