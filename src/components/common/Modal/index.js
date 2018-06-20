import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';

import './styles.scss';

export default class Modal extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        document.getElementsByTagName('HTML')[0].style.overflow = 'hidden'
    }

    handleSubmit = () => {
        document.getElementsByTagName('HTML')[0].style.overflow = 'auto';
        this.props.handleSubmit();
    };

    handleCancel = () => {
        document.getElementsByTagName('HTML')[0].styleoverflow = 'auto';
        this.props.handleCancel();
    };

    render () {
        const { width, buttonText, title, children, handleCancel, links, classNames } = this.props;
        const modalLinks = links ?
            (links.map((link, key) => {
                return (<div key={key}><Link to="/fd">{link}</Link></div>)
            }))
            : '';
        return (
            <div className={"custom-modal " + (classNames ? classNames : '')}>
                <div style={{width: width || '30%'}} className="modal-wrap">
                    <header>
                        <h3>{title}</h3>
                    </header>
                    <div className="modal-body">
                        {children}
                    </div>
                    <footer>
                        <Button className="footer-button" onClick={this.handleSubmit}>{buttonText}</Button>
                        <div className="footer-links">
                            {
                                handleCancel ?
                                    <button onClick={this.handleCancel}>Cancel</button>
                                    : null
                            }
                            {modalLinks}
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}