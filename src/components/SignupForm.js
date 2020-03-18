import React from 'react';

class SignupForm extends React.Component {
    render(){
        return(
            <div id="signup-form">
                <form>
                    <input type="text" name="Enter your Email Address"/>
                    <br/>
                    <input type="text" name="Select a Username"/>
                    <br/>
                    <input type="password" name="Enter a Password"/>
                    <br/>
                    <input type="submit" value="Sign Up"/>
                </form>
            </div>
        )
    }
}

export default SignupForm