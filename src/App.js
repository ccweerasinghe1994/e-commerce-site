import React, {Component} from 'react';
import HomePage from "./pages/homepage/homePage.component";
import {Route, Switch} from 'react-router-dom'
import ShopPage from "./pages/Shop/ShopPage.component";
import Header from "./components/Header/Header.component";
import SignInAndSignUp from "./pages/sign-in-sign-up/SignInAndSignUp.component";
import {auth} from './firebase/FireBase.util'

class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            user: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({
                user: user
            }, () => console.log(user))
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className="App">
                <Header currentuser={this.state.user} />
                <Switch>
                    <Route path='/' exact component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signin' component={SignInAndSignUp}/>
                </Switch>
            </div>
        );
    }

}

export default App;
