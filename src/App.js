import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CityDetailsPage from './components/CityDetailsPage';
import HomeView from './components/HomeView';


const App = () => (
    <>
        <Switch>
            <Route exact path='/' component={HomeView} />
            <Route path='/city' component={CityDetailsPage} />
        </Switch>
    
    </>
);

export default App;