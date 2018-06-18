import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.scss';



class Footer extends Component {
    render () {
        return (
            <footer className="footer">
                <div className="container">
                    <p>IDFC Mutual Fund © 2017</p>
                </div>
            </footer>
        )
    }
}

export default withStyles(s)(Footer);