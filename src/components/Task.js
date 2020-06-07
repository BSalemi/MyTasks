import React from 'react';

class Task extends React.Component{

    render(){
        const {id, toDo} = this.props;
        
        return(
            
            <div id="task" className="tc bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5">
               
                <h2>
                    {toDo}
                </h2>
                <p>
                    {this.props.completed ? "Status - Complete" : "Status - Incomplete"}
                </p>
                <div>
                    {this.props.completed ?  <button className= "tc pa1 ma1 br3 bw2">Undo</button> :  <button className="tc pa1 ma1 br3 bw2 dib">Complete</button>}
                </div>
               
               

            </div>
        )
    }
}

export default Task