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
            tabOpen: 'reviewOrders'
        }
    }

    componentWillMount() {
        if(!this.state.adminAuth) {
            this.props.history.push('/adminlogin');
        }
        else if( !(this.props.location.pathname.split('/')[2]) ){
            this.props.history.push('/admin/reviewOrders');
        }
        else {
            this.props.history.push('/pathNotFound');
        }
    }

    render() {
        const { match } = this.props;
        return(
            <div className="admin-wrapper">
                <Switch>
                    <Route path={`${match.path}/reviewOrders`} component={ReviewOrders} />
                </Switch>
                <ToolMaster/>
            </div>
        )
    }
}

export default Admin;