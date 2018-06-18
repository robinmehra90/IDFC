import React,{Component} from 'react';
import {connect} from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SelectBox from '../components/common/SelectBox';
import Button from '../components/common/Button';
import ErrorBoundary from '../components/common/ErrorBoundary';
import ForgotPassword from '../components/LoginFlow/Forgotpassword';

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
                    <ForgotPassword/>
               </ErrorBoundary>
               <ErrorBoundary>
                   <Footer/>
               </ErrorBoundary>
           </div>
        )
    }
}

export default connect(state => state)(App);