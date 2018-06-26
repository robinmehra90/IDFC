import React, {Component} from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from '../../components/Header';
import AdminLogin from './AdminLogin';
import ReviewOrders from './ReviewOrders';
import ToolMaster from './ToolMaster';


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state={
            adminAuth: true,
            tabOpen: 'ToolMaster'
        }
    }

    componentWillMount() {
        if(!this.state.adminAuth) {
            this.props.history.push('/adminlogin');
        }
        else {
            this.props.history.push('/admin/ToolMaster');
        }
    }

    adminNavHandler = (navOption) => {
        console.log('navOption', navOption);
        this.setState({tabOpen: navOption}, () => {
            this.props.history.push("/admin/"+navOption);
        })
    };

    render() {
        const { match } = this.props;
        return(
            <div className="admin-wrapper">
                <Switch>
                    <Route path={`${match.path}/ToolMaster`} component={ToolMaster} />
                </Switch>
            </div>
        )
    }
}

export default Admin;