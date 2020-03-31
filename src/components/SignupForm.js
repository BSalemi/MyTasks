import React from 'react';

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
    
    render(){
        return(
            <div id="signup-form">
                <form>
                    <input type="text" name="emailAddress" placeholder="Enter your Email Address" value={this.state.emailAddress} onChange={event => this.handleOnChange(event)}/>
                    <br/>
                    <input type="text" name="username" placeholder="Choose a Username" value={this.state.username} onChange={event => this.handleOnChange(event)}/>
                    <br/>
                    <input type="password" name="password" placeholder="Enter a Password" value={this.state.password} onChange={event => this.handleOnChange(event)}/>
                    <br/>
                    <input type="password" name="passwordConfirm" placeholder="Confirm Password" value={this.state.passwordConfirm} onChange={event => this.handleOnChange(event)}/>
                    <br/>
                    <input type="submit" value="Sign Up"/>
                </form>
            </div>
        )
    }
}
export default SignupForm