import React, {Component} from 'react';
import './styles.scss'

export default class Button extends Component {
    render() {
        const {  onClick, children, classNames } = this.props;
        return(
            <button className={"idfc-main-button " + (classNames ? classNames : '')} onClick={onClick}>{children}</button>
        )
    }
}