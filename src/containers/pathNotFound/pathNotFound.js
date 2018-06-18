import React,{Component} from 'react';
import s from './styles.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class PathNotFound extends Component {
    render() {
        return(
            <div className="page-not-found">
                <h1>404 Not Found</h1>
                <p>The requested URL {this.props.location.pathname} was not found on this server.</p>
            </div>
        )
    }
}
export default withStyles(s)(PathNotFound);