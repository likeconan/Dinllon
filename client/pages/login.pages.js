import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import FormTextField from 'components-dumb/FormTextField/FormTextField';
import { editMobile, editPassword, userLogin } from 'actions/user.action';
import { Translate } from 'utilities';

@connect((store) => {
    return { loginViewModel: store.user.loginViewModel, loading: store.load.loading };
})

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            submitted: false
        }
    }

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
        this.setState({
            submitted: true
        });
        if (this.props.loginViewModel.validatedMobile && this.props.loginViewModel.validatedPassword && !this.props.loading) {
            this
                .props
                .dispatch(userLogin(this.props.loginViewModel));
        }

    }
    _loginPress = (e) => {
        if (e.charCode === 13) {
            this._loginClick()
        }
    }

    render() {
        return (
            <div className='column-center center-flex'>
                <FormTextField
                    floatingLabelText={Translate.lang.mobile}
                    onChange={this._updateMobile}
                    white={true}
                    submitted={this.state.submitted}
                    value={this.props.loginViewModel.mobile}
                    validated={this.props.loginViewModel.validatedMobile}
                    errorText={Translate.lang.mobile_error}></FormTextField>
                <FormTextField
                    floatingLabelText={Translate.lang.password}
                    white={true}
                    type='password'
                    submitted={this.state.submitted}
                    onChange={this._updatePassword}
                    onKeyPress={this._loginPress}
                    validated={this.props.loginViewModel.validatedPassword}
                    value={this.props.loginViewModel.password}
                    errorText={Translate.lang.password_error}></FormTextField>
                <RaisedButton
                    className='account-btn'
                    label='Get Started'
                    primary={true}
                    onClick={this._loginClick} />
                <div className='other-action-con'>
                    <Link to="/register">
                        <FlatButton label={Translate.lang.register} labelStyle={{ color: 'white' }} rippleColor='white' />
                    </Link>
                    <Link to="/forget">
                        <FlatButton label={Translate.lang.forget_password} labelStyle={{ color: 'white' }} rippleColor='white' />
                    </Link>
                </div>
            </div>
        );
    }

}

export default Login;