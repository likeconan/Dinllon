import React, { Component } from 'react';
import WhiteTextField from '../components/WhiteTextField/WhiteTextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import FormTextField from '../components/FormTextField/FormTextField';
import { editMobile, editPassword, userLogin } from '../actions/user.action';
import { Translate } from '../utilities';

@connect((store) => {
    return { loginViewModel: store.user.loginViewModel };
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
        if (this.props.loginViewModel.validatedMobile && this.props.loginViewModel.validatedMobile) {
            this
                .props
                .dispatch(userLogin(this.props.loginViewModel));
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
                    validated={this.props.loginViewModel.validatedPassword}
                    value={this.props.loginViewModel.password}
                    errorText={Translate.lang.password_error}></FormTextField>
                <RaisedButton
                    className='account-btn'
                    label='Get Started'
                    primary={true}
                    onClick={this._loginClick} />
                <div></div>
            </div>
        );
    }

}

export default Login;