import React from 'react';
import SignupForm from '../components/SignupForm.js';
import LoginForm from '../components/LoginForm.js';

class UserContainer extends React.Component{
    
    render(){
        console.log(this.props, "props in userContainer")
        return(
            <div id="user-container">
                <SignupForm updateLoggedInUser={this.props.updateLoggedInUser}/>
                <LoginForm/>
            </div>
        )
    }
}

export default UserContainer