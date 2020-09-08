import React, {Component} from 'react';
import HomePage from "./pages/homepage/homePage.component";
import {Route, Switch} from 'react-router-dom'
import ShopPage from "./pages/Shop/ShopPage.component";
import Header from "./components/Header/Header.component";
import SignInAndSignUp from "./pages/sign-in-sign-up/SignInAndSignUp.component";
import {auth, createUserProfileDocument} from './firebase/FireBase.util';
import {connect} from 'react-redux'
import {setCurrentuser} from "./Redux/User/user.action";

class App extends Component {


    unsubscribeFromAuth = null;

    componentDidMount() {

        const {setCurrentUser} = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                })
            } else {
                setCurrentUser(userAuth)
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route path='/' exact component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signin' component={SignInAndSignUp}/>
                </Switch>
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: user => dispatch(setCurrentuser(user))
})

export default connect(null, mapDispatchToProps)(App);
