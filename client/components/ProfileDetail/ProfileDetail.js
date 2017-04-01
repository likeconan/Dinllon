import React, { Component } from 'react';
import MaxContenteditable from '../MaxContenteditable/MaxContenteditable';
import BackPicChange from '../BackPicChange/BackPicChange';
import LinkProfileName from '../LinkProfileName/LinkProfileName';
import EditProfileButton from '../EditProfileButton/EditProfileButton';
import { connect } from 'react-redux';
import { editNickName, editGoingOn, editBirthday, editWork, editSchool, getProfile } from '../../actions/profile.action';
import SchoolIcon from 'material-ui/svg-icons/social/school'
import CakeIcon from 'material-ui/svg-icons/social/cake'
import WorkIcon from 'material-ui/svg-icons/action/work'
import DatePicker from 'material-ui/DatePicker';
import Classnames from 'classnames';
import storage from 'store2';



require('./profile-detail.less');

@connect((store) => {
    return {
        profileUser: store.profile.user,
        editingUser: store.profile.editingUser,
        enableEdit: store.profile.enableEdit,
    }
})


class ProfileDetail extends Component {

    componentWillMount() {
        const userid = storage.session('ss.profile.user.id');
        this.props.dispatch(getProfile(userid));
    }

    _editNickName = (val) => {
        this.props.dispatch(editNickName(val));
    }

    _editGoingOn = (val) => {
        this.props.dispatch(editGoingOn(val));
    }

    _editWork = (val) => {
        this.props.dispatch(editWork(val));
    }

    _editSchool = (val) => {
        this.props.dispatch(editSchool(val));
    }
    _editBirthday = (tmp, date) => {
        this.props.dispatch(editBirthday(date));
    }

    render() {
        const user = this.props.enableEdit ? { ...this.props.editingUser } : { ...this.props.profileUser };
        return (
            <profile-detail>
                <div className='pd-head-con center-flex'>
                    <BackPicChange className='profile-head-pic' label='Change your profile photo'
                        imgSrc={user.headPic} active={this.props.enableEdit} />
                    <EditProfileButton />
                </div>

                <div className='profile-info-con'>
                    <MaxContenteditable className='pic-nickname mont-font edit-text-con' value={user.nickName}
                        disabled={!this.props.enableEdit} maxlength={15} onBlur={this._editNickName} />

                    <MaxContenteditable className='pic-goingOn edit-text-con' value={user.goingOn}
                        disabled={!this.props.enableEdit} maxlength={30} onBlur={this._editGoingOn} />

                    <div className='pic-more-info-con center-flex'>
                        {(this.props.enableEdit || user.work) && <WorkIcon className='margin-right' />}

                        <MaxContenteditable className='pic-school edit-text-con' value={user.work}
                            disabled={!this.props.enableEdit} maxlength={50} onBlur={this._editWork} />
                    </div>

                    <div className='pic-more-info-con center-flex'>
                        {(this.props.enableEdit || user.school) && <SchoolIcon className='margin-right' />}

                        <MaxContenteditable className='pic-school edit-text-con' value={user.school}
                            disabled={!this.props.enableEdit} maxlength={50} onBlur={this._editSchool} />
                    </div>
                    {
                        (this.props.enableEdit || user.birthday) &&
                        (
                            <div className='pic-more-info-con center-flex'>
                                <CakeIcon className='margin-right' />
                                <DatePicker
                                    textFieldStyle={
                                        {
                                            width: '200px',
                                            cursor: 'default',
                                            height: this.props.enableEdit ? '40px' : '20px'
                                        }}
                                    className={Classnames('pic-date-con', { 'active': this.props.enableEdit })} hintText='pick a date'
                                    disabled={!this.props.enableEdit}
                                    value={user.birthday ? new Date(user.birthday) : null}
                                    onChange={this._editBirthday} />
                            </div>
                        )
                    }

                </div>
            </profile-detail>
        );
    }
}

export default ProfileDetail;