import React,{Component} from 'react';
import {connect} from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';

class App extends Component{

    render(){
        return (
           <div>
               <Header/>
               IDFC
               <Footer/>
           </div>
        )
    }
}

export default connect(state => state)(App);