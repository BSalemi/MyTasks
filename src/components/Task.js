import React from 'react';

class Task extends React.Component{

    render(){
        const {id, to_do, completed} = this.props;
        return(
            <div id="task" className="tc bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5">

            </div>
        )
    }
}

export default Task