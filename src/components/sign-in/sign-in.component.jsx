import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component.jsx'
import CustomButton from '../custom-button/custom-button.component.jsx'
import { signInWithGoogle } from '../../firebase/firebase.utils.js';

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="email"
                        required />

                    <FormInput
                        name="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"
                        required />
                    <div className="buttons">
                        <CustomButton type="submit" >Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                        {/* <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>  prop without any value has a default value of true */}
                    </div>

                </form>
            </div>
        );
    }
}

export default SignIn;