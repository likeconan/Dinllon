import React, { Component } from 'react';
import UserDataCon from '../UserDataCon/UserDataCon';
import EditProfileButton from '../EditProfileButton/EditProfileButton';
import { connect } from 'react-redux';

require('./profile-user-data.less');

@connect((store) => {
    return {
        userData: store.profile.userData
    }
})

class ProfileUserData extends Component {
    render() {
        return (
            <profile-user-data class='all-center-flex'>
                <div className='pud-con center-flex'>
                    <UserDataCon className='profile-udc' data={this.props.userData} />
                    <EditProfileButton className='pud-epb' />
                </div>
            </profile-user-data>
        );
    }
}

export default ProfileUserData;