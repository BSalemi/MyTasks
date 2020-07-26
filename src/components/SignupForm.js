import React from 'react';
import { USERS_URL } from '../constants.js'

class SignupForm extends React.Component {

    state= {
        emailAddress: "",
        username: "",
        password: "",
        passwordConfirm: ""
    }

    handleOnChange =(event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    createNewUser = (user) => {
        fetch(USERS_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then((userData) => {
            localStorage.loggedIn = userData.id 
            this.props.updateLoggedInUser(localStorage.loggedIn)
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        const user = {
            emailAddress: this.state.emailAddress,
            username: this.state.username,
            password: this.state.password,
            passwordConfirm: this.state.passwordConfirm
        };
        this.createNewUser(user);
    }

    render(){
        return(
            <div id="signup-form">
                    <form onSubmit={event => this.handleOnSubmit(event)} className="pa2">
                        <input type="email" name="emailAddress" placeholder="Enter your Email Address" value={this.state.emailAddress} onChange={event => this.handleOnChange(event)}/>
                        <br/>
                        <input type="text" name="username" placeholder="Choose a Username" value={this.state.username} onChange={event => this.handleOnChange(event)}/>
                        <br/>
                        <input type="password" name="password" placeholder="Enter a Password" value={this.state.password} onChange={event => this.handleOnChange(event)}/>
                        <br/>
                        <input type="password" name="passwordConfirm" placeholder="Confirm Password" value={this.state.passwordConfirm} onChange={event => this.handleOnChange(event)}/>
                        <br/>
                        <input type="submit" value="Sign Up" className="ma1"/>
                    </form>
            </div>
        )
    }
}
export default SignupForm