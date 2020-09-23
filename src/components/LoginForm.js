import React from 'react';
import {BASE_URL} from '../constants.js'
import { BrowserRouter as Route, Link } from 'react-router-dom';

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
                if(!user.hasOwnProperty("message")){
                    localStorage.loggedIn = user.id
                    localStorage.user = user.username
                    this.props.updateCurrentUser(user)
                    this.props.history.push("/")
                } else {
                    this.setState({
                        ...this.state,
                        error: "Username or Password is Incorrect"
                    })
                }
            })
        } else {
            alert("Please enter a username and password before attempting to log in.")
        }  
    }

    resetState = () => {
        this.setState({
            username: "",
            password: "",
            error: ""
        })
    }

    render(){
        const {error} = this.state
        return(
            <>
            {error.length !== 0 ? 
             <><p id="errorMessage"> {error} </p>
             <Link to="/login" onClick={this.resetState}>Go back</Link> </>: 
             <div className="loginForm"> 
                <form onSubmit={event => this.logInUser(event)}>
                    <input type="text" name="username" placeholder="Enter your Username" value={this.state.username} onChange={event => this.handleOnChange(event)}/>
                    <input type="password" name="password" placeholder="Enter your Password" value={this.state.password} onChange={event => this.handleOnChange(event)}/>
                    <input type="submit" className="submit-button" value="Login"/>
                </form>
            </div>
        }
            </>
        )
    }
}

export default LoginForm 