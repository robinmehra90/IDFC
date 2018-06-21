import React,{ Component } from 'react';
import './styles.scss';

export default class Dropdown extends Component {
    render() {
        const { listItems, header, headerIcon, handleItemClick } = this.props;
        let list = listItems.map((item, key) => {
            return(<li key={key} className="dropdown-item" onClick={() => handleItemClick(item.funcVal)}>{item.text}</li>)
        });
        return(
            <div className="dropdown">
                <label>
                    {headerIcon ?
                        <i className={headerIcon} />
                        : null
                    }
                    {header}
                    <span className="arrow down" />
                </label>
                <ul className="dropdown-menu">
                    {list}
                </ul>
            </div>
        )
    }
}