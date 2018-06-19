import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './containers/Home';
import PathNotFound from './containers/pathNotFound/pathNotFound';
import s from './scss/reset.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class AppRoutes extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route component={PathNotFound}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default withStyles(s)(AppRoutes);