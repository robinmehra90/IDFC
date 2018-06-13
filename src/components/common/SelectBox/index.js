import React, {Component} from 'react';
import onClickOutside from "react-onclickoutside";
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.scss';

class SelectBox extends Component {
    constructor(props) {
        super(props);
        this.state= {
            openDropdown: false
        }
    }

    handleClickOutside = evt => {
        this.setState({openDropdown: false})
    };

    handleSelect = () => {
        this.setState({openDropdown : !this.state.openDropdown})
    };

    handleOptionChange = (option) => {
        this.setState({openDropdown : !this.state.openDropdown}, () => {
            this.props.handleOptionChange(option);
        })
    };

    render() {
        const { selectValue, classNames, selectOptions } = this.props;
        const { openDropdown } = this.state;
        let options = selectOptions.map((option, key) => {
            return <li key={key} onClick={() => this.handleOptionChange(option)}>{option}</li>
        });
        return(
            <div className="custom-selectbox-wrapper">
                <div onClick={this.handleSelect} className={"custom-selectbox " + (classNames ? classNames : '')}>{selectValue}</div>
                { openDropdown ?
                    <ul className="open-select">
                        {options}
                    </ul>
                    : null
                }
            </div>
        )
    }
}

export default withStyles(s)(onClickOutside(SelectBox));