import React from 'react';
import HomePage from "./pages/homepage/homePage.component";
import {Route,Switch} from 'react-router-dom'
import ShopPage from "./pages/Shop/ShopPage.component";
import Header from "./components/Header/Header.component";

function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route  path='/' exact component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
            </Switch>
        </div>
    );
}

export default App;
