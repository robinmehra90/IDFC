/**
 * Created by TTND on 5/5/2018.
 */
import React  from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
// import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import AppRoutes from './routes';

ReactDOM.render(

    <Provider store={store}>
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);