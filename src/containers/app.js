import React,{Component} from 'react';
import {connect} from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SelectBox from '../components/common/SelectBox';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import ErrorBoundary from '../components/common/ErrorBoundary';
import Login from '../components/LoginFlow/Login';
import Register from '../components/LoginFlow/Register';
import ForgotPassword from '../components/LoginFlow/Forgotpassword';
import ChangePassword from '../components/LoginFlow/Changepassword';

class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            treeSelected: ''
        }
    }

    handleTreeChange = (tree) => {
        this.setState({ treeSelected: tree })
    };

    onChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    buttonClick = () => {
        alert("Heisenberg")
    };

    render(){
        const treeOptions = ["Mango", "Peepal", "Banana", "Coconut"];
        const { treeSelected } = this.state;

        return (
           <div>
               <ErrorBoundary>
                   <Header/>
               </ErrorBoundary>
               <ErrorBoundary>
                   <SelectBox
                       selectOptions={treeOptions}
                       selectValue={treeSelected}
                       handleOptionChange={this.handleTreeChange}
                   />
               </ErrorBoundary>
               <ErrorBoundary>
                   <Button onClick={this.buttonClick}>SAY MY NAME</Button>
               </ErrorBoundary>
               <ErrorBoundary>
                   {(() => {
                       let modalConfig = "login";
                       switch(modalConfig){
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
                               null
                       }
                   })()}
               </ErrorBoundary>
               <ErrorBoundary>
                   <Footer/>
               </ErrorBoundary>
           </div>
        )
    }
}

export default connect(state => state)(App);