import React, {Component} from "react";
import Input from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";
import {auth} from "../../firebase/FireBase.util";
import {ButtonsContainer, SignInContainer, SignInTitleContainer} from "./SignIn.styles";
import {emailPasswordGoogleSignInStart, googleSignInStart} from "../../Redux/User/user.action";
import {connect} from 'react-redux';

class SignIn extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {email, password} = this.state;
        const {signInWithEmailPassword} = this.props;
        signInWithEmailPassword(email, password)

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
        const {googleSignInStart} = this.props;
        return (
            <SignInContainer>
                <SignInTitleContainer>i all ready have an account</SignInTitleContainer>
                <span>i already have an account</span>
                <form onSubmit={this.handleSubmit}>
                    <Input label='Email' handleChange={this.handleChange} type="email" value={this.state.email} required
                           name='email'/>

                    <Input label='Password' handleChange={this.handleChange} type="password" value={this.state.password}
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
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    signInWithEmailPassword: (email, password) => dispatch(emailPasswordGoogleSignInStart({email, password}))
})
export default connect(null, mapDispatchToProps)(SignIn);