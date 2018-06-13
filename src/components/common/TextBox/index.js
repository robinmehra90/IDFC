import React, {Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.scss'

class TextBox extends Component {
    render() {
        const { type, value, id, onChangeHandler, placeholder, classNames } = this.props;
        return(
            <input id={id}
                   className={"custom-textbox " + classNames ? classNames : ''}
                   type={type} value={value}
                   onChange= {(e) => onChangeHandler(e)}
                   placeholder={placeholder} />
        )
    }
}

export default withStyles(s)(TextBox);