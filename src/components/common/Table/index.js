import React, {Component} from 'react';
import './styles.scss';

export default class TableComponent extends Component {
    constructor(props) {
        super(props);
    }
    getTableDataRows(data,action) {
        console.log(this)
        if (data.rows && data.rows.length) {
             return data.rows.map(function(row, key) {
                return (
                    <tr key={key}>
                        <td>{key + 1}</td>
                        {
                            data.columns.map((columnName, key) => {
                                return <td key={key}>{ row[columnName] }</td>
                            })
                        }
                        {
                            action ? (<td><button>Edit</button><button>Delete</button></td>): null
                        }
                    </tr>
                )
            });
        } else {
            return (<tr>
                    <td rowSpan={data.columns.length}>
                        No Data Founds
                    </td>
            </tr>)
        }
    }

    render () {
        const { width,classNames, action, data} = this.props;
        console.log(action)
        let tableHeaders = (<thead>
                <tr>
                    <th>S.No</th>
                    {data.columns.map(function(columnName, key) {
                        return <th key={key}>{columnName}</th>;
                    })}
                    {
                        action ? (<th>Action</th>): null
                    }
                </tr>
            </thead>);

        var tableData = this.getTableDataRows(data,action);

        return (
            <div className={"custom-table " + (classNames ? classNames : '')} style={{width}}>
                <table border='0' cellPadding="0" cellSpacing="0">
                    {tableHeaders}
                    <tbody>
                        { tableData }
                    </tbody>
                </table>
            </div>
        )
    }

}

