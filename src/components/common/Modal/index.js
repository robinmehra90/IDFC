import React, {Component} from 'react';
import {link} from 'react-router-dom';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.scss';

export default class Modal extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        document.getElementsByTagName('body').overflow = 'hidden'
    }

    handleSubmit = () => {
        document.getElementsByTagName('body').overflow = 'auto';
        this.props.handleSubmit();
    };

    handleCancel = () => {
        document.getElementsByTagName('body').overflow = 'auto';
        this.props.handleCancel();
    };

    render () {
        const { width, buttonText, title, children, handleCancel, link, classNames } = this.props;
        const links = link.map((link) => {
            return (<link to={link}>{link}</link>)
        });
        return (
            <div style={{width: `{width ? width : '100%'}`}} className={"custom-modal " + classNames ? classNames : ''}>
                <header>{title}</header>
                <div className="modal-body">
                    {children}
                </div>
                <footer>
                    <button className="footer-button" onClick={this.handleSubmit}>{buttonText}</button>
                    {
                        handleCancel ?
                            <button onClick={this.handleCancel}>Cancel</button>
                            : null
                    }
                    {links}
                </footer>
            </div>
        )
    }
}

export default withStyles(s)(Modal);