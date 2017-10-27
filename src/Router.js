import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login'
import Search from './components/Search/Search';
import Profile from './components/Profile/Profile';
import EditProfile from './components/EditProfile/EditProfile';



export default function Router() {

return ( 

<Switch>
    <Route exact path='/auth/login' component={ Login }/>
    <Route path='/search' component={ Search } />
    <Route path='/profile' component={ Profile } />
    <Route path='/edit/profile' component={ EditProfile } />
</Switch>

)}
