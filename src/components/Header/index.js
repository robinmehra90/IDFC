import React from 'react';



export default class Header extends React.Component {
    render () {
        return (
            <header className="header">
                <div className="header-logo">
                    <a href="/">
                        <img src="./public/images/logo.png" alt="logo" />
                    </a>
                </div>
                <div className="header-right-nav">
                    <ul>
                        <li><a href="#"><i className="icon-cart" /></a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>

            </header>
        )
    }
}