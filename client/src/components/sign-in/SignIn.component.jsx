import React, { useState} from "react";
import Input from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";
import {auth} from "../../firebase/FireBase.util";
import {ButtonsContainer, SignInContainer, SignInTitleContainer} from "./SignIn.styles";
import {emailPasswordGoogleSignInStart, googleSignInStart} from "../../Redux/User/user.action";
import {connect} from 'react-redux';

const SignIn = ({googleSignInStart,signInWithEmailPassword}) => {


    const [userCredentials, setUserCredentials] = useState({email: '', password: ''})
    const handleSubmit = async (event) => {
        event.preventDefault();
        const {email, password} = userCredentials;
        signInWithEmailPassword(email, password)

        try {
            await auth.signInWithEmailAndPassword(email, password)
        } catch (error) {
            console.log(error)
        }


    }
    const handleChange = (event) => {
        const {value, name} = event.target;
        setUserCredentials({
            ...userCredentials,
            [name]: value
        })
    }


    const {email, password} = userCredentials;
    return (
        <SignInContainer>
            <SignInTitleContainer>i all ready have an account</SignInTitleContainer>
            <span>i already have an account</span>
            <form onSubmit={handleSubmit}>
                <Input label='Email' handleChange={handleChange} type="email" value={email} required
                       name='email'/>

                <Input label='Password' handleChange={handleChange} type="password" value={password}
                       required name='password'/>


                <ButtonsContainer>
                    <CustomButton type='submit'>Submit Form</CustomButton>
                    <CustomButton type='button' isGoogleSignIn onClick={googleSignInStart}>Sign In with
                        Google</CustomButton>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    signInWithEmailPassword: (email, password) => dispatch(emailPasswordGoogleSignInStart({email, password}))
})
export default connect(null, mapDispatchToProps)(SignIn);