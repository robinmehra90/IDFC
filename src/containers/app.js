import React,{Component} from 'react';
import {connect} from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SelectBox from '../components/common/SelectBox';
import TextBox from '../components/common/TextBox';
import Button from '../components/common/Button';
import ErrorBoundary from '../components/common/ErrorBoundary';

class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            treeSelected: '',
            treeValue: ''
        }
    }

    handleTreeChange = (tree) => {
        this.setState({ treeSelected: tree })
    };

    onChangeHandler = (e) => {
        this.setState({treeValue: e.target.value})
    };

    buttonClick = () => {
        alert("Said your name. Now What?")
    };

    render(){
        const treeOptions = ["Mango", "Peepal", "Banana", "Coconut"];
        const { treeSelected, treeValue } = this.state;
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
                       id="tree" type="text" value={treeValue}
                       placeholder="Enter Tree Name"
                       title="Tree"
                       onChangeHandler={this.onChangeHandler}
                   />
               </ErrorBoundary>
               <ErrorBoundary>
                   <Button onClick={this.buttonClick}>SAY MY NAME</Button>
               </ErrorBoundary>
               <ErrorBoundary>
                   <Footer/>
               </ErrorBoundary>
           </div>
        )
    }
}

export default connect(state => state)(App);