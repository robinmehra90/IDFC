import React, {Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.scss'

class Button extends Component {
    render() {
        const {  onClick, children, classNames } = this.props;
        return(
            <button className={"idfc-main-button " + (classNames ? classNames : '')} onClick={onClick}>{children}</button>
        )
    }
}

export default withStyles(s)(Button);