import React from 'react';
import { USERS_URL } from '../constants.js'

class SignupForm extends React.Component {

    state= {
        email_address: "",
        username: "",
        password: "",
        password_confirmation: "",
        errors: {}
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
            console.log(userData.errors, "errors")
            if(!userData.errors){
                localStorage.loggedIn = userData.id 
                this.props.updateCurrentUser(userData)
            } else {
                this.setState({
                    errors: userData.errors
                })
            }
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
    isErrorsEmpty = (obj) => {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
    generateErrors = () => {
        const {errors} = this.state;
        let messages = [];  
        for (let [error, msgs] of Object.entries(errors)) {
          const messagesLis = msgs.map(m => (<li>{m}</li>));
          messages.push(
            <>
              {error.charAt(0).toUpperCase() + error.slice(1)}:   
              {messagesLis}
            </>
          );
        }  
        return messages;
    }

    render(){
        const {errors} = this.state

        return(
            <div>
            {this.isErrorsEmpty(errors) ? ( 
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
            </div>)
            : <ul> {this.generateErrors()}</ul>}
            </div>
        )
    }
}
export default SignupForm