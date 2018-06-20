import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './containers/Home';
import PathNotFound from './containers/pathNotFound/pathNotFound';
import Admin from './containers/Admin/index';
import AdminLogin from './containers/Admin/AdminLogin';

import './scss/reset.scss';

export default class AppRoutes extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/admin' component={Admin}/>
                    <Route exact path='/admin/login' component={AdminLogin}/>
                    <Route component={PathNotFound}/>
                </Switch>
            </BrowserRouter>
        )
    }
}