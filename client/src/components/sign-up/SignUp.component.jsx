import React, {useState} from 'react'
import Input from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";
import {SignUpContainer, SignUpTitleContainer} from "./SignIn.styles";
import {signUpStart} from "../../Redux/User/user.action";
import {connect} from 'react-redux';

const SignUp = ({signUpUser}) => {

    const [userDetails, setUserDetails] = useState({
        displayName: "",
        password: "",
        email: "",
        confirmPassword: ""
    })

    const handleSubmit = async event => {
        event.preventDefault();
        const {displayName, password, email, confirmPassword} = userDetails;
        if (password !== confirmPassword) {
            alert("Passwords doesn't match")
            return;
        }

        await signUpUser(email, password, displayName);



    }

    const handleChange = (event) => {
        const {value, name} = event.target;

        setUserDetails({
            ...userDetails,
            [name]: value
        })
    }

        const {displayName, password, email, confirmPassword} = userDetails;
        return (
            <SignUpContainer>
                <SignUpTitleContainer>I DO Not Have an account</SignUpTitleContainer>
                <span>Sign Up with your email and password</span>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <Input handleChange={handleChange} label='Display Name' requried='true' type='text'
                           name={'displayName'} value={displayName}/>
                    <Input handleChange={handleChange} label='Email' requried='true' type='email' name={'email'}
                           value={email}/>
                    <Input handleChange={handleChange} label='Password ' requried='true' type='password'
                           name={'password'}
                           value={password}/>
                    <Input handleChange={handleChange} label='Confirm Password' requried='true' type='password'
                           name={'confirmPassword'} value={confirmPassword}/>

                    <CustomButton type={'submit'}> SIGN UP</CustomButton>
                </form>
            </SignUpContainer>
        )
    }


const mapDispatchToProps = dispatch => ({
    signUpUser: (email, password, displayName) => dispatch(signUpStart({email, password, displayName}))
})
export default connect(null, mapDispatchToProps)(SignUp);