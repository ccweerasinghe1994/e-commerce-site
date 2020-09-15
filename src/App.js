import React, {useEffect} from 'react';
import HomePage from "./pages/homepage/homePage.component";
import {Route, Switch} from 'react-router-dom'
import ShopPage from "./pages/Shop/ShopPage.component";
import Header from "./components/Header/Header.component";
import SignInAndSignUp from "./pages/sign-in-sign-up/SignInAndSignUp.component";    
import {connect} from 'react-redux';
import {checkUserSession} from "./Redux/User/user.action";
import {Redirect} from 'react-router-dom'
import {selectCurrentUser} from './Redux/User/user.selectors';
import {createStructuredSelector} from 'reselect'
import CheckoutPage from "./pages/checkout/checkout.component";

const App = ({checkUserUserSession, currentUser}) => {


    useEffect(() => {
        checkUserUserSession();
    }, [checkUserUserSession])


    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route exact path='/checkout' component={CheckoutPage}/>
                <Route exact path='/signin' render={() => {
                    return currentUser ? <Redirect to='/'/> : <SignInAndSignUp/>
                }}/>
            </Switch>
        </div>
    );

}

const mapDispatchToProps = (dispatch) => ({
    checkUserUserSession: () => dispatch(checkUserSession())

});

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
