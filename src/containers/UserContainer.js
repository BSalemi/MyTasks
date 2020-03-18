import React from 'react';
import SignupForm from '../components/SignupForm.js';
import LoginForm from '../components/LoginForm.js';

class UserContainer extends React.Component{
    render(){
        return(
            <div id="user-container">
                <SignupForm/>
                <LoginForm/>
            </div>
        )
    }
}

export default UserContainer