import React, { Component } from 'react';
import WhiteTextField from '../components/WhiteTextField/WhiteTextField';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import IconButton from 'material-ui/IconButton';
import { grey50 } from 'material-ui/styles/colors';
import Utilites from '../utilities';


class Register extends Component {
    render() {
        return (
            <div className='center-flex'>
                <div className='center-flex column-center'>
                    <WhiteTextField floatLabel='Mobile'></WhiteTextField>
                    <WhiteTextField floatLabel='SMS Code'></WhiteTextField>
                    <RaisedButton className='account-btn' label='Get Started' primary={true} onClick={() => this._registerClick()} />
                </div>
                <IconButton iconClassName='material-icons' style={{ alignSelf: 'flex-start', marginTop: '20px' }} iconStyle={{ color: grey50 }}>
                    email
                </IconButton>
            </div>
        );
    }
    _registerClick() {
        Utilites.Navigate.goToSocialLife();
    }
}

export default Register;