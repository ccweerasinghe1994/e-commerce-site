import React, {Component} from 'react'
import './SignUp.styles.scss'
import Input from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";
import {auth, createUserProfileDocument} from "../../firebase/FireBase.util";

class SignUp extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            displayName: "",
            password: "",
            email: "",
            confirmPassword: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, password, email, confirmPassword} = this.state;
        if (password !== confirmPassword) {
            alert("Passwords doesn't match")
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: "",
                password: "",
                email: "",
                confirmPassword: ""
            })

        } catch (error) {
            console.log(error)
        }


    }

    handleChange = (event) => {
        const {value, name} = event.target;

        this.setState({
            [name]: value
        })
    }

    render() {
        const {displayName, password, email, confirmPassword} = this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>I DO Not Have an account</h2>
                <span>Sign Up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <Input handleChange={this.handleChange} label='Display Name' requried='true' type='text'
                           name={'displayName'} value={displayName}/>
                    <Input handleChange={this.handleChange} label='Email' requried='true' type='email' name={'email'}
                           value={email}/>
                    <Input handleChange={this.handleChange} label='Password ' requried='true' type='password' name={'password'}
                           value={password}/>
                    <Input handleChange={this.handleChange} label='Confirm Password' requried='true' type='password'
                           name={'confirmPassword'} value={confirmPassword}/>

                    <CustomButton type={'submit'}> SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp