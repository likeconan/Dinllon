import {Router, Route, browserHistory} from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import pages from './pages';
import store from './store';
import {Provider} from 'react-redux';

require("./styles/layout.less");
injectTapEventPlugin();

const authTransition = function authTransition(nextState, replaceWith) {
    //    if(nextState.location.pathname==="/dashboard"){ replaceWith('/home');    }
}

const customMui = getMuiTheme({
    stepper: {
        textColor: "rgba(255, 255, 255, 0.87)",
        disabledTextColor: "rgba(255, 255, 255, 0.26)"
    }
});

ReactDOM.render(
    <Provider store={store}>
    <MuiThemeProvider muiTheme={customMui}>
        <Router history={browserHistory}>
            <Route component={pages.Layout}>
                <Route path="/" component={pages.Home}/>
                <Route path="/life" component={pages.SocialLife}/>
                <Route component={pages.AccountLayout}>
                    <Route path='/login' component={pages.Login}/>
                    <Route path='/register' component={pages.Register}/>
                </Route>
                <Route path="/profile" component={pages.Profile}/>
            </Route>
        </Router>
    </MuiThemeProvider>
</Provider>, document.getElementById('root'));