import React, { Component } from 'react';
import BackPicChange from '../BackPicChange/BackPicChange';
import LinkProfileName from '../LinkProfileName/LinkProfileName';
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
        return (
            <profile-detail>
                <BackPicChange className='profile-head-pic' label='Change your profile photo'
                    imgSrc={this.props.profileUser.headPic} active={this.props.enableEdit} />
                <div className='profile-info-con'>
                    <LinkProfileName>
                        <h5 className='mont-font'>{this.props.profileUser.nickName}</h5>
                    </LinkProfileName>
                </div>
            </profile-detail>
        );
    }
}

export default ProfileDetail;