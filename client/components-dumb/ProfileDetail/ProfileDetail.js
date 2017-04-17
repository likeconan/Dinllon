import React, { Component } from 'react';
import { UserModel } from 'models';

require('./profile-detail.less');

class ProfileDisplayDetail extends Component {
    render() {
        const user = new UserModel(this.props.user).user;
        const enableEdit = this.props.enableEdit;
        return (
            <profile-detail>
                <div className='pd-head-con center-flex'>
                    <BackPicChange className='profile-head-pic' label='Change your profile photo'
                        imgSrc={user.headPic} active={enableEdit} />
                    {this.props.button}
                </div>

                <div className='profile-info-con'>
                    <MaxContenteditable className='pic-nickname mont-font edit-text-con' value={user.nickName}
                        disabled={!enableEdit} maxlength={15} onBlur={this.props.editNickName} />

                    <MaxContenteditable className='pic-goingOn edit-text-con' value={user.goingOn}
                        disabled={!enableEdit} maxlength={30} onBlur={this.props.editGoingOn} />

                    <div className='pic-more-info-con center-flex'>
                        {(enableEdit || user.work) && <WorkIcon className='margin-right' />}

                        <MaxContenteditable className='pic-school edit-text-con' value={user.work}
                            disabled={!enableEdit} maxlength={50} onBlur={this.props.editWork} />
                    </div>

                    <div className='pic-more-info-con center-flex'>
                        {(enableEdit || user.school) && <SchoolIcon className='margin-right' />}

                        <MaxContenteditable className='pic-school edit-text-con' value={user.school}
                            disabled={!enableEdit} maxlength={50} onBlur={this.props.editSchool} />
                    </div>
                    {
                        (enableEdit || user.birthday) &&
                        (
                            <div className='pic-more-info-con center-flex'>
                                <CakeIcon className='margin-right' />
                                <DatePicker
                                    textFieldStyle={
                                        {
                                            width: '200px',
                                            cursor: 'default',
                                            height: enableEdit ? '40px' : '20px'
                                        }}
                                    className={Classnames('pic-date-con', { 'active': enableEdit })} hintText='pick a date'
                                    disabled={!enableEdit}
                                    value={user.birthday ? new Date(user.birthday) : null}
                                    onChange={this.props.editBirthday} />
                            </div>
                        )
                    }

                </div>
            </profile-detail>
        );
    }
}

export default ProfileDisplayDetail;