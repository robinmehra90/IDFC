import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';


export default class Header extends Component {
    render () {
        return (
            <header className="header">
                <div className="container">
                    <div className="header-logo">
                        <a href="/">
                            <img src="./public/images/logo.png" alt="logo" />
                        </a>
                    </div>
                    <div className="header-right-nav">
                        <ul>
                            <li><Link to="/"><i className="icon-cart" /> Cart</Link></li>
                            <li><a href="#"><i className="icon-login" />Login</a></li>
                        </ul>
                    </div>

                </div>
            </header>
        )
    }
}