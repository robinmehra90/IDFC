import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import PathNotFound from './containers/pathNotFound/pathNotFound';
import AdminLogin from './containers/Admin/AdminLogin';
import Admin from './containers/Admin';
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import './scss/reset.scss';


export default class AppRoutes extends React.Component {
    render () {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path="/adminLogin" component={AdminLogin}/>
                    <Route path='/admin' component={Admin}/>
                    <Route component={PathNotFound}/>
                </Switch>
                <Footer/>
            </div>
        )
    }
}