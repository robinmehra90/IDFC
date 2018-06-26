import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './styles.scss';

export default class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, classNames, description, links } = this.props;
        const navLinks = links.map((link) => {
            return (<Link to={link}>{link}</Link>)
        });
        return(
            <div className={classNames}>
                <h3 className="card-title">{title}</h3>

                {
                    description
                }
                {navLinks}

            </div>
        )
    }
}