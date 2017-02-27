import React, { Component } from 'react';
import UserDataCon from '../UserDataCon/UserDataCon';
import EditProfileButton from '../EditProfileButton/EditProfileButton';


require('./profile-user-data.less');

class ProfileUserData extends Component {
    render() {
        return (
            <profile-user-data class='all-center-flex'>
                <div className='pud-con center-flex'>
                    <UserDataCon className='profile-udc' />
                    <EditProfileButton className='pud-epb'/>
                </div>
            </profile-user-data>
        );
    }
}

export default ProfileUserData;