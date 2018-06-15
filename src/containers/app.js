import React,{Component} from 'react';
import {connect} from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SelectBox from '../components/common/SelectBox';
import TextBox from '../components/common/TextBox';
import Button from '../components/common/Button';
import ErrorBoundary from '../components/common/ErrorBoundary';
import Modal from '../components/common/Modal';

class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            treeSelected: '',
            treeValue: '',
            empID: '',
            password: ''
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
        const { treeSelected, treeValue, empID, password } = this.state;
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
                   <TextBox
                       type="text" name="treeValue" value={treeValue}
                       placeholder="Enter Tree Name"
                       title="Tree"
                       onChangeHandler={this.onChangeHandler}
                   />
               </ErrorBoundary>
               <ErrorBoundary>
                   <Button onClick={this.buttonClick}>SAY MY NAME</Button>
               </ErrorBoundary>
               <ErrorBoundary>
                   <Modal buttonText="LOGIN"
                          title="Login"
                          handleSubmit={this.buttonClick}
                          links={['/forgotPassword', '/changePassword']}
                   >
                       <TextBox
                           type="text" name="empID" value={empID}
                           placeholder="Enter Employee ID"
                           title="EMPLOYEE ID"
                           onChangeHandler={this.onChangeHandler}
                       />
                       <TextBox
                           type="password" name="password" value={password}
                           placeholder="Enter Password"
                           title="Password"
                           onChangeHandler={this.onChangeHandler}
                       />
                   </Modal>
               </ErrorBoundary>
               <ErrorBoundary>
                   <Footer/>
               </ErrorBoundary>
           </div>
        )
    }
}

export default connect(state => state)(App);