import React,{Component} from 'react';
import {connect} from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from '../components/common/Modal';
import ErrorBoundary from '../components/common/ErrorBoundary';
import Login from '../components/LoginFlow/Login';
import Register from '../components/LoginFlow/Register';
import ForgotPassword from '../components/LoginFlow/Forgotpassword';
import ChangePassword from '../components/LoginFlow/Changepassword';
import SliderComponent from '../components/common/Slider';
import Tabcomponents from '../components/Tabber';

class Home extends Component{
    constructor(props) {
        super(props);
    }

    onChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    buttonClick = () => {
        alert("Heisenberg")
    };

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
                <ErrorBoundary>
                    <SliderComponent />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Tabcomponents />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Footer/>
                </ErrorBoundary>

            </div>
        )
    }
}

export default connect(state => state)(Home);