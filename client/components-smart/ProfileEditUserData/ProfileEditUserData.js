import React, { Component } from 'react';
import ProfileUserData from 'components-dumb/ProfileUserData/ProfileUserData';
import { connect } from 'react-redux';

@connect((store) => {
    return {
        userData: store.profile.pageUser.userData,
        isOwn: store.profile.pageUser.isOwn
    }
})
class ProfileEditUserData extends Component {
    render() {
        return (
            <ProfileUserData userData={this.props.userData} isOwn={this.props.isOwn} />
        );
    }
}

export default ProfileEditUserData;