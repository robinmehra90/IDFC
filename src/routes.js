import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import PathNotFound from './containers/pathNotFound/pathNotFound';
import AdminLogin from './containers/Admin/AdminLogin';
import Admin from './containers/Admin';
import Header from "./components/Header/index";
import {Footer} from "./components/Footer/index";
import './scss/reset.scss';


class AppRoutes extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            adminAuthPage: this.props.location.pathname.split('/')[1] === 'adminLogin',
            tabOpen: ''
        }
    }

    render () {
        const { adminAuthPage } = this.state;
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path="/adminLogin" component={AdminLogin}/>
                    <Route path='/admin' component={Admin}/>
                    <Route component={PathNotFound}/>
                </Switch>
                {!adminAuthPage ?
                    <Footer/>
                    : null
                }
            </div>
        )
    }
}
export default withRouter(AppRoutes);