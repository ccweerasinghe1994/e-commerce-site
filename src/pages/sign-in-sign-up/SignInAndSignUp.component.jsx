import React from 'react';
import SignIn from "../../components/sign-in/SignIn.component";
import SignUp from "../../components/sign-up/SignUp.component";
import {SignInSignUpContainer} from "./SignInSignUp.styles";

const SignInAndSignUp = () => {
    return (
        <SignInSignUpContainer>
            <SignIn/>
            <SignUp/>
        </SignInSignUpContainer>
    )
}

export default SignInAndSignUp;