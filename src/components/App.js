import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';


const CityDetailsPage=lazy(()=>import('./views/CityDetailsPage'));

const App = () => (
    <>
     <Suspense fallback={<p>Loading...</p>}>
        <Switch>
            <Route exact path='/' component={HomeView} />
            <Route path='/cities/:cityId' component={CityDetailsPage} />
        </Switch>
        </Suspense>
    
    </>
);

export default App;