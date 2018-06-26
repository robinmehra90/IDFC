import React,{ Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './styles.scss';
import IconCart from '../common/IconSvg/IconCart';
import IconUser from '../common/IconSvg/IconUser';
import Dropdown from '../common/Dropdown';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state={
            adminAuth: true
        }
    }

    handleProfileDropdown = (option) => {
        console.log('option selected', option);
    };

    adminNavHandler = (navOption) => {
        console.log('navOption', navOption);
        this.setState({tabOpen: navOption}, () => {
            this.props.history.push("/admin/"+navOption);
        })
    };

    render () {
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
                            handleItemClick={this.adminNavHandler}
                        /></li>
                        <li><Dropdown
                            header="Tool Master"
                            listItems={[
                                {text:'Tool Master', funcVal:"toolMaster"},
                                {text:'Update Quantity',funcVal:"updateQty"},
                                {text:'Tool Master Variant',funcVal:"toolMasterVariant"},
                                {text:'Tool Category Master',funcVal:"toolCategoryMaster"},
                            ]}
                            handleItemClick={this.adminNavHandler}
                        /></li>
                        <li><Link to="/admin/reviewOrders">Review Orders</Link></li>
                        <li className="pull-right">
                            <Dropdown
                                header="Hi Admin"
                                headerIcon={<IconUser width="25" height="25"/>}
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
                        <li><Link to="/">
                            <IconCart width="25" height="25"/>
                            Cart</Link></li>
                        <li className="pull-right">
                            <Dropdown
                                header="Hi Admin"
                                headerIcon={<IconUser width="25" height="25"/>}
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

export default withRouter(Header);