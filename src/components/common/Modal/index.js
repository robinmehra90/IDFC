import React, {Component} from 'react';
import {link} from 'react-router-dom';

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
        const { size, buttonText, title, children, handleCancel, link } = this.props;
        const links = link.map((link) => {
            return (<link to={link}>{link}</link>)
        });
        return (
            <div className="custom-modal">
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