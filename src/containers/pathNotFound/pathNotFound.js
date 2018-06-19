import React,{Component} from 'react';
import './styles.scss';

export default class PathNotFound extends Component {
    render() {
        return(
            <div className="page-not-found">
                <h1>404 Not Found</h1>
                <p>The requested URL {this.props.location.pathname} was not found on this server.</p>
            </div>
        )
    }
}
