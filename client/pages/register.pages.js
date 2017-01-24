import React, { Component } from 'react';
import WhiteTextField from '../components/WhiteTextField/WhiteTextField';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import IconButton from 'material-ui/IconButton';
class Register extends Component {
    render() {
        return (
            <div className='column-center center-flex'>
                <div>
                    <WhiteTextField floatLabel='Mobile'></WhiteTextField>
                    <IconButton iconClassName='material-icons'>
                        home
                    </IconButton>
                </div>
                <RaisedButton className='account-btn' label='Get Started' primary={true} />
                <div></div>
            </div>
        );
    }
}

export default Register;