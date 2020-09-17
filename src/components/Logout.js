import React from 'react';

class Logout extends React.Component{

    logOutUser = () => {
        localStorage.clear('loggedIn')
        window.location.href = '/login'
    }
    render(){
        return(
            <div>
                <button className="logout" onClick={this.logOutUser}>Logout</button>
            </div>
        )
    }
}

export default Logout