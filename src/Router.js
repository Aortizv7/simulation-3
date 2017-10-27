import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import EditProfile from './components/EditProfile/EditProfile';



export default function Router() {

return ( 

<Switch>
    <Route to='/auth/login' component={ Login } />
    <Route to='/dashboard' component={ Dashboard } />
    <Route to='/profile' component={ Profile } />
    <Route to='/edit/profile' component={ EditProfile } />
</Switch>

)}
