import React, {Component} from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import SliderComponent from '../../components/common/Slider';
import Tabcomponents from '../../components/common/Tabber';
import ErrorBoundary from "../../components/common/ErrorBoundary/index";

class Home extends Component {

    render() {
        return(
            <div>
                <ErrorBoundary>
                    <SliderComponent/>
                </ErrorBoundary>
                {/*<ErrorBoundary>*/}
                    {/*<Tabcomponents/>*/}
                {/*</ErrorBoundary>*/}
            </div>
        )
    }
}

export default Home;