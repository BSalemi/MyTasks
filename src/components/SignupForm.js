import React from 'react';
import { USERS_URL } from '../constants.js'

class SignupForm extends React.Component {

    state= {
        email_address: "",
        username: "",
        password: "",
        password_confirmation: ""
    }

    handleOnChange =(event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    createNewUser = (user) => {
        console.log(user, "user in createNewUser")
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
            email_address: this.state.email_address,
            username: this.state.username,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation
        };
        this.createNewUser(user);
    }

    render(){
        return(
            <div id="signup-form">
                    <form onSubmit={event => this.handleOnSubmit(event)} className="pa2">
                        <input type="email" name="email_address" placeholder="Enter your Email Address" value={this.state.email_address} onChange={event => this.handleOnChange(event)}/>
                        <br/>
                        <input type="text" name="username" placeholder="Choose a Username" value={this.state.username} onChange={event => this.handleOnChange(event)}/>
                        <br/>
                        <input type="password" name="password" placeholder="Enter a Password" value={this.state.password} onChange={event => this.handleOnChange(event)}/>
                        <br/>
                        <input type="password" name="password_confirmation" placeholder="Confirm Password" value={this.state.password_confirmation} onChange={event => this.handleOnChange(event)}/>
                        <br/>
                        <input type="submit" value="Sign Up" className="ma1"/>
                    </form>
            </div>
        )
    }
}
export default SignupForm