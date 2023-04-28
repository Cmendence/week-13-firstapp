import React, {Component} from "react";

// •	Using create-react-app, create a new React project. Create a LoginForm component that contains the following:
// •	Username and password input fields, an h3 that says Log In, with a border.
// Style the component using the default generated CSS file.

export default class Login extends Component {
    render() {
        return (
           
            <div className="container">
                <div className="card">
                    <div className="card-body bg-secondary text-light rounded text-center">
                        <h1>Log In</h1>
                        <div className="form-group">
                            <div>
                            <label for="email-input">Email</label>
                            </div>
                            <input type="email" id="email-input" placeholder="Email Address" />
                            <div>
                            <label for="password-input">Password</label>
                            </div>
                            <input type="password" id="password-input" placeholder="Password" />
                            <div>
                            <button type="submit" id="login-btn" className="btn btn-info mt-2">Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}