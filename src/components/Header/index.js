import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import Dropdown from '../common/Dropdown';


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
                        <li><Link to="/">Employee Master</Link></li>
                        <li><Link to="/">Tool Master</Link></li>
                        <li><Link to="/">Review Orders</Link></li>
                        {/*make a common dropdown*/}
                        <li className="pull-right">
                            <Dropdown
                                header="Hi Admin"
                                headerIcon="icon-login"
                                listItems={[
                                {text:'My Account', funcVal:"myAccount"},{text:'Logout',funcVal:"logout"}
                                ]}
                            />
                        </li>
                    </ul>
                </div>
                :
                <div className="header-right-nav">
                    <ul>
                        <li><Link to="/"><i className="icon-cart" />Cart</Link></li>
                        <li><Link to="/"><i className="icon-login" />Login</Link></li>
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