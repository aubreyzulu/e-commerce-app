import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.ultis';
import './sign-in.styles.scss';

class SignIn extends React.Component {
    state = {
        email: '',
        password: ''
    }


    handleSubmit = (event) => {
        event.preventDefault()
    }

    handleChange = (event) => {

        const { value, name } = event.target;
        this.setState({ [name]: value })
        console.log(event.target)
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label='Email'
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email} required />

                    <FormInput
                        label='Password'
                        name='password'
                        type='password'
                        handleChange={this.handleChange}
                        value={this.state.password} required />

                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;