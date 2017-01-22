import { Router, Route, browserHistory } from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import pages from './pages';
require("./styles/layout.less");
injectTapEventPlugin();

const authTransition = function authTransition(nextState, replaceWith) {
    //    if(nextState.location.pathname==="/dashboard"){
    //        replaceWith('/home');
    //    }
}

const customMui = getMuiTheme({
    stepper: {
        textColor: "rgba(255, 255, 255, 0.87)",
        disabledTextColor: "rgba(255, 255, 255, 0.26)"
    },
});


ReactDOM.render(
    <MuiThemeProvider muiTheme={customMui}>
        <Router history={browserHistory}>
            <Route component={pages.Layout}>
                <Route path="/" component={pages.Home} />
            </Route>
            <Route path="/other" component={pages.Other} />
        </Router>
    </MuiThemeProvider>,

    document.getElementById('root')
);