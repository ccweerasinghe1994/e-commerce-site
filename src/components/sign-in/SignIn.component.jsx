import React, {Component} from "react";
import './SignIn.styles.scss';
import Input from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";
import {signInWithGoogle, auth} from "../../firebase/FireBase.util";

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
            <div className='sign-in'>
                <h2 className='title'>i all ready have an account</h2>
                <span>i already have an account</span>
                <form>
                    <Input label='Email' handleChange={this.handleChange} type="email" value={this.state.email} required
                           name='email'/>

                    <Input label='Password' handleChange={this.handleChange} type="password" value={this.state.password}
                           required name='password'/>


                    <div className="buttons">
                        <CustomButton onClick={this.handleSubmit}>Submit Form</CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;