import React, { Component } from 'react';
import MaxContenteditable from 'components-dumb/MaxContenteditable/MaxContenteditable';
import ProfilePhoto from 'components-dumb/ProfilePhoto/ProfilePhoto';
import SchoolIcon from 'material-ui/svg-icons/social/school'
import CakeIcon from 'material-ui/svg-icons/social/cake'
import WorkIcon from 'material-ui/svg-icons/action/work'
import DatePicker from 'material-ui/DatePicker';
import Classnames from 'classnames';

require('./profile-detail.less');

class ProfileDetail extends Component {
    render() {
        const user = this.props.user;
        const enableEdit = this.props.enableEdit;
        return (
            <profile-detail>
                <ProfilePhoto
                    userId={user.uuid}
                    imgSrc={user.headPic}
                    enableEdit={enableEdit} />
                <div className={Classnames('profile-info-con', { 'editing': enableEdit })}>
                    <MaxContenteditable
                        className='pic-nickname mont-font edit-text-con'
                        value={user.nickName}
                        disabled={!enableEdit}
                        maxlength={15}
                        onBlur={this.props.editNickName} />

                    <MaxContenteditable
                        className='pic-goingOn edit-text-con'
                        value={user.goingOn}
                        disabled={!enableEdit}
                        maxlength={30}
                        onBlur={this.props.editGoingOn} />

                    <div className='pic-more-info-con center-flex'>
                        {(enableEdit || user.work) && <WorkIcon className='margin-right' />}

                        <MaxContenteditable
                            className='pic-school edit-text-con'
                            value={user.work}
                            disabled={!enableEdit}
                            maxlength={50}
                            onBlur={this.props.editWork} />
                    </div>

                    <div className='pic-more-info-con center-flex'>
                        {(enableEdit || user.school) && <SchoolIcon className='margin-right' />}

                        <MaxContenteditable
                            className='pic-school edit-text-con'
                            value={user.school}
                            disabled={!enableEdit}
                            maxlength={50}
                            onBlur={this.props.editSchool} />
                    </div>
                    {(enableEdit || user.birthday) && (
                        <div className='pic-more-info-con center-flex'>
                            <CakeIcon className='margin-right' />
                            <DatePicker
                                textFieldStyle={{
                                    width: '200px',
                                    cursor: 'default',
                                    height: enableEdit
                                        ? '40px'
                                        : '20px'
                                }}
                                className={Classnames('pic-date-con', { 'active': enableEdit })}
                                hintText='pick a date'
                                disabled={!enableEdit}
                                value={user.birthday
                                    ? new Date(user.birthday)
                                    : null}
                                onChange={this.props.editBirthday} />
                        </div>
                    )
                    }

                </div>
            </profile-detail>
        );
    }
}

export default ProfileDetail;