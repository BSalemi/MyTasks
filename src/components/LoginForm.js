import React from 'react';
import {USERS_URL} from '../constants.js'

class LoginForm extends React.Component{

    state = {
        username: "",
        password: ""
    }

    handleOnChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    logInUser = (event) => {
        event.preventDefault()

        let user = {
            username: this.state.username,
            password: this.state.password
        };

        fetch(USERS_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then((userId) => {
            if(userId){ 
                localStorage.loggedIn = userId
                this.props.history.push("/")
            } else {
                return "Username or Password is Incorrect."
            }
            
        })

    }

    render(){
        return(
            <div id="login-form">
                {localStorage.loggedIn !== "undefined" ? null : 
                    <form onSubmit={event => this.logInUser(event)}>
                        <input type="text" name="username" placeholder="Enter your Username" value={this.state.username} onChange={event => this.handleOnChange(event)}/>
                        <br/>
                        <input type="password" name="password" placeholder="Enter your Password" value={this.state.password} onChange={event => this.handleOnChange(event)}/>
                        <input type="submit" value="Login"/>
                    </form>
                }
            </div>
        )
    }
}

export default LoginForm 