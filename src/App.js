import React from 'react';
import HomePage from "./pages/homepage/homePage.component";
import {Route,Switch} from 'react-router-dom'
const HatsPage = ()=>(
    <div>Hats Page</div>
)
function App() {
    return (
        <div className="App">
            <Switch>
                <Route  path='/' exact component={HomePage}/>
                <Route path='/shop/hats' component={HatsPage}/>
            </Switch>
        </div>
    );
}

export default App;
