import React, {Component} from "react";
import './SignIn.styles.scss';
import Input from "../form-inpur/FormInput.component";

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
            <div className='sing-in'>
                <h2>i all ready have an account</h2>
                <span>i already have an account</span>
                <form onSubmit={this.handleSubmit}>
                    <Input label='Email' handleChange={this.handleChange} type="email" value={this.state.email} required name='email'/>

                    <Input label='Password' handleChange={this.handleChange}  type="password" value={this.state.password} required name='password'/>
                    <label htmlFor="password">Password</label>
                    <input type="submit" value="Submit Form"/>
                </form>
            </div>
        )
    }
}

export default SignIn;