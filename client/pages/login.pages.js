import React, { Component } from 'react';
import WhiteTextField from '../components/WhiteTextField/WhiteTextField';
import RaisedButton from 'material-ui/RaisedButton';
import Utilites from '../utilities';

class Login extends Component {
    render() {
        return (
            <div className='column-center center-flex'>
                <WhiteTextField floatLabel='Mobile'></WhiteTextField>
                <WhiteTextField floatLabel='Password' type='password'></WhiteTextField>
                <RaisedButton className='account-btn' label='Get Started' primary={true} onClick={() => this._loginClick()} />
                <div></div>
            </div>
        );
    }
    _loginClick() {
        Utilites.Navigate.goToSocialLife();
    }
}

export default Login;