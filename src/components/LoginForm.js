import React from 'react';

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

    render(){
        return(
            <div id="login-form">
                <form>
                    <input type="text" name="username" placeholder="Enter your Username" value={this.state.username} onChange={event => this.handleOnChange(event)}/>
                    <br/>
                    <input type="password" name="password" placeholder="Enter your Password" value={this.state.password} onChange={event => this.handleOnChange(event)}/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}

export default LoginForm 