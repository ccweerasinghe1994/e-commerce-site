import React, {Component} from "react";
import './SignIn.styles.scss';
import Input from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";

class SignIn extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            password: "",
            email: ""
        })
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
                <h2 className='title' >i all ready have an account</h2>
                <span>i already have an account</span>
                <form onSubmit={this.handleSubmit}>
                    <Input label='Email' handleChange={this.handleChange} type="email" value={this.state.email} required name='email'/>

                    <Input label='Password' handleChange={this.handleChange}  type="password" value={this.state.password} required name='password'/>

                    <CustomButton type="submit" >Submit Form</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;