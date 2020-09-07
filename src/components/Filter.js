import React from 'react';

class Filter extends React.Component{
    render(){
        return(
            <div className="filterBar">
                <button>All Tasks</button>
                <button>Tasks With Deadlines</button>
                <button>Tasks Without Deadlines</button>
                <button>Completed Tasks</button>
            </div>
        )
    }
}

export default Filter