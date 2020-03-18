import React from 'react';

class LoginForm extends React.Component{
    render(){
        return(
            <div id="login-form">
                <form>
                    <input type="text" name="Enter your Username"/>
                    <br/>
                    <input type="password" name="Enter your Password"/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}

export default LoginForm 