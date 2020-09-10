import React, {Component} from "react";
import Input from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";
import {signInWithGoogle, auth} from "../../firebase/FireBase.util";
import {ButtonsContainer, SignInContainer, SignInTitleContainer} from "./SignIn.styles";

class SignIn extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async (event) => {
        console.log(event.target)
        event.preventDefault();

        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({
                password: "",
                email: ""
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
        return (
            <SignInContainer >
                <SignInTitleContainer >i all ready have an account</SignInTitleContainer>
                <span>i already have an account</span>
                <form>
                    <Input label='Email' handleChange={this.handleChange} type="email" value={this.state.email} required
                           name='email'/>

                    <Input label='Password' handleChange={this.handleChange} type="password" value={this.state.password}
                           required name='password'/>


                    <ButtonsContainer >
                        <CustomButton onClick={this.handleSubmit}>Submit Form</CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Sign In with Google</CustomButton>
                    </ButtonsContainer>
                </form>
            </SignInContainer>
        )
    }
}

export default SignIn;