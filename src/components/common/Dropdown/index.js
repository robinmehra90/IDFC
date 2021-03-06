import React,{ Component } from 'react';
import './styles.scss';

export default class Dropdown extends Component {
    render() {
        const { listItems, header, headerIcon, handleItemClick, dropDownWidth } = this.props;
        let list = listItems.map((item, key) => {
            return(<li key={key} className="dropdown-item"
                       onClick={() => handleItemClick(item.funcVal)}>{item.text}</li>)
        });
        return(
            <div className="dropdown">
                <label>
                    {headerIcon ?
                        <span>{headerIcon} </span>
                        : null
                    }
                    {header}
                    <span className="arrow down" />
                </label>
                <ul className="dropdown-menu" style={{width: dropDownWidth}}>
                    {list}
                </ul>
            </div>
        )
    }
}