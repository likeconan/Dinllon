import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Email from 'material-ui/svg-icons/communication/email';
import { grey50 } from 'material-ui/styles/colors';
import Utilites from '../utilities';
import FormTextField from '../components/FormTextField/FormTextField';
import { editRegisterMobile, editRegisterPassword, editSMS, userRegister } from '../actions/user.action';
import { connect } from 'react-redux';
import { Link } from 'react-router';

@connect((store) => {
    return {
        registerViewModel: store.user.registerViewModel
    }
})

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false
        }
    }

    _updateMobile = (e) => {
        this
            .props
            .dispatch(editRegisterMobile(e.target.value));
    }

    _updatePassword = (e) => {
        this
            .props
            .dispatch(editRegisterPassword(e.target.value));
    }

    _updateSMS = (e) => {
        this
            .props
            .dispatch(editSMS(e.target.value));
    }

    _registerClick = () => {
        this.setState({
            submitted: true
        });
        if (this.props.registerViewModel.validatedMobile
            && this.props.registerViewModel.validatedPassword
            && this.props.registerViewModel.validatedSMSCode) {
            this
                .props
                .dispatch(userRegister(this.props.registerViewModel));
        }

    }

    render() {
        return (
            <div className='center-flex'>
                <div className='center-flex column-center'>
                    <FormTextField
                        floatingLabelText={Utilites.Translate.lang.mobile}
                        onChange={this._updateMobile}
                        white={true}
                        submitted={this.state.submitted}
                        value={this.props.registerViewModel.mobile}
                        validated={this.props.registerViewModel.validatedMobile}
                        errorText={Utilites.Translate.lang.mobile_error} />

                    <FormTextField
                        floatingLabelText={Utilites.Translate.lang.password}
                        white={true}
                        type='password'
                        submitted={this.state.submitted}
                        onChange={this._updatePassword}
                        validated={this.props.registerViewModel.validatedPassword}
                        value={this.props.registerViewModel.password}
                        errorText={Utilites.Translate.lang.password_error}></FormTextField>
                    <div className='sms-con space-between width-100p'>
                        <FormTextField
                            floatingLabelText={Utilites.Translate.lang.sms_code}
                            white={true}
                            style={{ width: '120px' }}
                            submitted={this.state.submitted}
                            onChange={this._updateSMS}
                            validated={this.props.registerViewModel.validatedSMSCode}
                            value={this.props.registerViewModel.smsCode}
                            errorText={Utilites.Translate.lang.sms_error} />
                        <FlatButton icon={<Email color='white' />} rippleColor='white' />
                    </div>
                    <RaisedButton className='account-btn' label={Utilites.Translate.lang.register} primary={true} onClick={this._registerClick} />
                    <div className='width-100p'>
                        <Link to="/login">
                            <FlatButton label={Utilites.Translate.lang.login} labelStyle={{ color: 'white' }} rippleColor='white' />
                        </Link>
                    </div>

                </div>
            </div>
        );
    }
    _registerClick() {
        Utilites.Navigate.goToSocialLife();
    }
}

export default Register;