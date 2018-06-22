import React, { Component } from 'react';
import TableComponent from '../../../components/common/Table';
import './styles.scss';

export default class ToolMaster extends Component {
    render() {
        let tablelist ={
            columns : ['Tool Name','Variant', 'Tool Details' ],
            rows : [
                {
                    'Tool Name': 'Ball Pen Silver',
                    'Variant':'Silver',
                    'Tool Details':'Ball pen with an inbuilt SIP calculator!',
                },
                {
                    'Tool Name': 'Ball Pen Blue	',
                    'Variant':'Blue',
                    'Tool Details':'Ball pen with an inbuilt SIP calculator!',
                },
                {
                    'Tool Name': 'CD - One Idiot ',
                    'Variant':'',
                    'Tool Details':'An ideal movie to instil financial awareness among the youth!',
                },
                {
                    'Tool Name': 'Corporate Folder - New',
                    'Variant':'',
                    'Tool Details':'asdaf',
                },
                {
                    'Tool Name': 'DVD BNB Bengali',
                    'Variant':'Bengali',
                    'Tool Details':'Bachat Nivesh Badhat dubbed in Bengali	',
                },
                {
                    'Tool Name': 'DVD BNB English',
                    'Variant':'English',
                    'Tool Details':'Bachat Nivesh Badhat dubbed in English',
                }
            ]
        }

        return(
            <div className="container">
                <TableComponent data={tablelist} />
            </div>
        )
    }
}