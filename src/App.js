import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CityDetailsPage from './components/views/CityDetailsPage';
import HomeView from './components/views/HomeView';


const App = () => (
    <>
        <Switch>
            <Route exact path='/' component={HomeView} />
            <Route path='/city' component={CityDetailsPage} />
        </Switch>
    
    </>
);

export default App;