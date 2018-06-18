import React, {Component} from 'react';
import {link} from 'react-router-dom';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.scss';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, classNames, descripdtion, links } = this.props;
        const links = links.map((link) => {
            return (<link to={link}>{link}</link>)
        });
        return(
            <div className={classNames}>
                <h3 className="card-title">{title}</h3>

                {
                    descripdtion
                }
                {links}

            </div>
        )
    }
}

export default withStyles(s)(Card);