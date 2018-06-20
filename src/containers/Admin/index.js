import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

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
                <Tabs>
                    <TabList>
                        <Tab>Title 1</Tab>
                        <Tab>Title 2</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}