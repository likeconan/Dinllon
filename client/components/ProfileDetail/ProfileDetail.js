import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';
import BackPicChange from '../BackPicChange/BackPicChange';
import LinkProfileName from '../LinkProfileName/LinkProfileName';
import EditProfileButton from '../EditProfileButton/EditProfileButton';
import { connect } from 'react-redux';

require('./profile-detail.less');

@connect((store) => {
    return {
        profileUser: store.profile.user,
        enableEdit: store.profile.enableEdit,
    }
})

class ProfileDetail extends Component {
    render() {
        const user = { ...this.props.profileUser }
        console.log("profile-detail")
        return (
            <profile-detail>
                <div className='pd-head-con center-flex'>
                    <BackPicChange className='profile-head-pic' label='Change your profile photo'
                        imgSrc={user.headPic} active={this.props.enableEdit} />
                    <EditProfileButton />
                </div>

                <div className='profile-info-con'>
                    <ContentEditable className='pic-nickname mont-font edit-text-con' html={user.nickName}
                        disabled={!this.props.enableEdit}
                        onChange={this.props.onChange} />
                </div>
            </profile-detail>
        );
    }
}

export default ProfileDetail;