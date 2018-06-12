import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './containers/app';
import PathNotFound from './containers/pathNotFound/pathNotFound';

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route component={PathNotFound}/>
            </Switch>
        </BrowserRouter>
    )
}