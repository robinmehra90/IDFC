import React, {Component} from 'react';
import './styles.scss';

export default class TableComponent extends Component {
    constructor(props) {
        super(props);
    }
    getTableDataRows(data) {
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
        const { width,classNames, imageDetails, data} = this.props;
        let tableHeaders = (<thead>
                <tr>
                    <th>S.no</th>
                    {data.columns.map(function(columnName, key) {
                        return <th key={key}>{columnName}</th>;
                    })}
                </tr>
            </thead>);

        var tableData = this.getTableDataRows(data);

        return (
            <div className={"custom-table " + (classNames ? classNames : '')} style={{width}}>
                <table border='0' cellpadding="0" cellspacing="0">
                    {tableHeaders}
                    <tbody>
                        { tableData }
                    </tbody>
                </table>
            </div>
        )
    }

}

