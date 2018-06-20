import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state={
            adminAuth: true
        }
    }

    render () {
        const rightNav =
            this.state.adminAuth ?
                <div className="text-align-left header-right-nav">
                    <ul>
                        <li>Employee Master</li>
                        <li>Tool Master</li>
                        <li>Review Orders</li>
                        {/*make a common dropdown*/}
                        <li className="pull-right">
                            <label>Hi Admin</label>
                            <a href="#"><i className="icon-login" />Logout</a>
                        </li>
                    </ul>
                </div>
                :
                <div className="header-right-nav">
                    <ul>
                        <li><Link to="/"><i className="icon-cart" /> Cart</Link></li>
                        <li><a href="#"><i className="icon-login" />Login</a></li>
                    </ul>
                </div>;
        return (
            <header className="header">
                <div className="container">
                    <div className="header-logo">
                        <a href="/">
                            <img src="./public/images/logo.png" alt="logo" />
                        </a>
                    </div>
                    {rightNav}
                </div>
            </header>
        )
    }
}