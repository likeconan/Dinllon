import React, {Component} from 'react';
import WhiteTextField from '../components/WhiteTextField/WhiteTextField';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import FormTextField from '../components/FormTextField/FormTextField';
import {editMobile, editPassword, userLogin} from '../actions/user.action';

@connect((store) => {
    return {loginViewModel: store.user.loginViewModel};
})

class Login extends Component {
    _updateMobile = (e) => {
        this
            .props
            .dispatch(editMobile(e.target.value));
    }

    _updatePassword = (e) => {
        this
            .props
            .dispatch(editPassword(e.target.value));
    }

    _loginClick = () => {
        this
            .props
            .dispatch(userLogin(this.props.loginViewModel));
    }

    render() {
        return (
            <div className='column-center center-flex'>
                <FormTextField
                    floatingLabelText='Mobile'
                    onChange={this._updateMobile}
                    white={true}
                    value={this.props.loginViewModel.mobile}
                    validated={this.props.loginViewModel.validatedMobile}
                    errorText='Please enter valid mobile number'></FormTextField>
                <FormTextField
                    floatingLabelText='Password'
                    white={true}
                    type='password'
                    onChange={this._updatePassword}
                    validated={this.props.loginViewModel.validatedPassword}
                    value={this.props.loginViewModel.password}
                    errorText='Password must be required and at least 6 characters'></FormTextField>
                <RaisedButton
                    className='account-btn'
                    label='Get Started'
                    primary={true}
                    onClick={this._loginClick}/>
                <div></div>
            </div>
        );
    }

}

export default Login;