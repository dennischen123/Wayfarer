import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Profile from '../components/Profile/Profile';
import CityPage from '../components/CityPage/CityPage';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/cities' component={CityPage} />
    </Switch>
);