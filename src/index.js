/**
 * Created by TTND on 5/5/2018.
 */
import React  from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

// Context Provider for isomorphic style loader
class ContextProvider extends React.Component {
    static childContextTypes = {
        insertCss: PropTypes.func,
    };

    getChildContext() {
        return { ...this.props.context }
    }

    render () {
        return <AppRoutes { ...this.props } />
    }
}

// main app
import App from './containers/app';
import store from './store';
import AppRoutes from './routes';
const context = {
    insertCss: (...styles) => {
        const removeCss = styles.map(x => x._insertCss());
        return () => {
            removeCss.forEach(f => f());
        };
    },
};

ReactDOM.render(

    <Provider store={store}>
        <ContextProvider context={context}>
            <AppRoutes />
        </ContextProvider>
    </Provider>,
    document.getElementById('app')
);