import React from 'react';
import {BASE_URL} from '../constants.js'

class LoginForm extends React.Component{

    state = {
        username: "",
        password: "",
        error: ""
    }

    handleOnChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    logInUser = (event) => {
        event.preventDefault()
        const {username, password} = this.state

        if(username.length > 1 && password.length > 1){
        
            let user = {
                username: username,
                password: password
            };

            fetch(BASE_URL + 'login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then((user) => {
                console.log(user.hasOwnProperty('message'), "user after log in")
                if(!user.hasOwnProperty("message")){
                    localStorage.loggedIn = user.id
                    this.props.updateCurrentUser(user)
                    this.props.history.push("/")
                } else {
                    this.setState({
                        ...this.state,
                        error: "Username or Password is Incorrect"
                    })
                    console.log(this.state.error, "Error")
                }
            })
        } else {
            alert("Please enter a username and password before attempting to log in.")
        }
        
    }

    render(){
        const {error} = this.state
        console.log(error,"error")
        return(
            <>
            {error.length !== 0 ? 
             <p> {error} </p> : 
             <div id="login-form"> 
             <form onSubmit={event => this.logInUser(event)}>
                 <input type="text" name="username" placeholder="Enter your Username" value={this.state.username} onChange={event => this.handleOnChange(event)}/>
                 <br/>
                 <input type="password" name="password" placeholder="Enter your Password" value={this.state.password} onChange={event => this.handleOnChange(event)}/>
                 <input type="submit" value="Login"/>
             </form>
         </div>
        }
            </>
        )
    }
}

export default LoginForm 