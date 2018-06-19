import React, {Component} from 'react';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.scss';

class Modal extends Component {
    constructor(props) {
        super(props);
    }


    render () {
        const { width, classNames } = this.props;
        return (
            <div className={"custom-slider " + (classNames ? classNames : '')}>
                <div style={{width: width || '30%'}} className="slider-wrap">
                    <div className="sliders-content">

                    </div>

                </div>
            </div>
        )
    }
}

export default withStyles(s)(Modal);