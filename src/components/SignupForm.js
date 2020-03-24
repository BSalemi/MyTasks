import React from 'react';

class SignupForm extends React.Component {

    state= {
        emailAddress: "",
        username: "",
        password: "",
        passwordConfirm: ""
    }
    
    render(){
        return(
            <div id="signup-form">
                <form>
                    <input type="text" name="emailAddress" placeholder="Enter your Email Address"/>
                    <br/>
                    <input type="text" name="username" placeholder="Select a Username"/>
                    <br/>
                    <input type="password" name="password" placeholder="Enter a Password"/>
                    <br/>
                    <input type="password" name="passwordConfirm" placeholder="Confirm Password"/>
                    <br/>
                    <input type="submit" value="Sign Up"/>
                </form>
            </div>
        )
    }
}
export default SignupForm