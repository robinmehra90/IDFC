import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from '../components/common/Modal';
import ErrorBoundary from '../components/common/ErrorBoundary';
import Login from '../components/LoginFlow/Login';
import Register from '../components/LoginFlow/Register';
import ForgotPassword from '../components/LoginFlow/Forgotpassword';
import ChangePassword from '../components/LoginFlow/Changepassword';
import Home from './Home';

import Admin from './Admin';
import AdminLogin from './Admin/AdminLogin';
import ReviewOrders from './Admin/ReviewOrders';

class App extends Component{
    constructor(props) {
        super(props);
    }

    modalConfig = (modalType) => {
        switch(modalType){
            case 'login':
                return <Modal title="Login" buttonText="Submit"  handleSubmit={this.buttonClick} links={['Forgot Password', 'Change Password']} children={<Login/>} />
                break;
            case 'register':
                return <Modal title="Register" buttonText="Submit"  handleSubmit={this.buttonClick} links={['Login']} children={<Register/>} />
                break;
            case 'forgot':
                return <Modal title="Forgot Password" buttonText="Submit"  handleSubmit={this.buttonClick} links={['Login']} children={<ForgotPassword/>} />
                break;
            case 'change':
                return <Modal title="Change Password" buttonText="Submit"  handleSubmit={this.buttonClick} links={['Login']} children={<ChangePassword/>} />
                break;
            default :
                return null;
                break;
        }
    };

    render(){
        let modalConfig = this.modalConfig('login');

        return (
            <div>
                <ErrorBoundary>
                    <Header/>
                </ErrorBoundary>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/admin' component={Admin}/>
                </Switch>
                <ErrorBoundary>
                    <Footer/>
                </ErrorBoundary>
            </div>
        )
    }
}

export default connect(state => state)(App);