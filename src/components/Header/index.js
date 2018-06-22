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

    handleProfileDropdown = (option) => {
        console.log('option selected', option);
    };

    render () {
        const { adminNavHandler } = this.props;
        const rightNav =
            this.state.adminAuth ?
                <div className="text-align-left header-right-nav">
                    <ul>
                        <li><Dropdown
                            header="Employee Master"
                            listItems={[
                                {text:'Role Master Panel', funcVal:"roleMaster"},
                                {text:'Employee Master Panel',funcVal:"employeeMaster"}
                            ]}
                            handleItemClick={adminNavHandler}
                        /></li>
                        <li><Dropdown
                            header="Tool Master"
                            listItems={[
                                {text:'Tool Master', funcVal:"toolMaster"},
                                {text:'Update Quantity',funcVal:"updateQty"},
                                {text:'Tool Master Variant',funcVal:"toolMasterVariant"},
                                {text:'Tool Category Master',funcVal:"toolCategoryMaster"},
                            ]}
                            handleItemClick={adminNavHandler}
                        /></li>
                        <li><Link to="/admin/reviewOrders">Review Orders</Link></li>
                        <li className="pull-right">
                            <Dropdown
                                header="Hi Admin"
                                headerIcon="icon-login"
                                dropDownWidth="130px"
                                listItems={[
                                    {text:'Logout',funcVal:"logout"}
                                ]}
                                handleItemClick={this.handleProfileDropdown}
                            />
                        </li>
                    </ul>
                </div>
                :
                <div className="header-right-nav">
                    <ul>
                        <li><Link to="/"><i className="icon-cart" />Cart</Link></li>
                        <li className="pull-right">
                            <Dropdown
                                header="Hi Admin"
                                headerIcon="icon-login"
                                dropDownWidth="130px"
                                listItems={[
                                    {text:'My Account', funcVal:"myAccount"},
                                    {text:'Logout',funcVal:"logout"}
                                ]}
                                handleItemClick={this.handleProfileDropdown}
                            />
                        </li>
                    </ul>
                </div>;
        return (
            <header className="header">
                <div className="container">
                    <div className="header-logo">
                        <a href="/">
                            <img src="/public/images/logo.png" alt="logo" />
                        </a>
                    </div>
                    {rightNav}
                </div>
            </header>
        )
    }
}