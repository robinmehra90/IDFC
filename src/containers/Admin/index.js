import React, {Component} from 'react';

export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.state={
            adminAuth: true
        }
    }

    componentWillMount() {
        if(!this.state.adminAuth) {
            this.props.history.push('/admin/login');
        }
    }

    render() {
        return(
            <div className="admin-wrapper">
                Admin
            </div>
        )
    }
}