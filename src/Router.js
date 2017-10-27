import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import EditProfile from './components/EditProfile/EditProfile';



export default function Router() {

return ( 

<Switch>
    <Route exact path='/auth/login' component={ Login } />
    <Route path='/dashboard' component={ Dashboard } />
    <Route path='/profile' component={ Profile } />
    <Route path='/edit/profile' component={ EditProfile } />
</Switch>

)}
