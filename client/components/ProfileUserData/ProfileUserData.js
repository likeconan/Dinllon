import React, { Component } from 'react';
import UserDataCon from '../UserDataCon/UserDataCon';
import EditProfileButton from '../EditProfileButton/EditProfileButton';


require('./profile-user-data.less');

class ProfileUserData extends Component {
    render() {
        return (
            <profile-user-data class='center-flex'>
                <div className='fake-container all-center-flex'>
                    <div className='fake-left-con'></div>
                    <div className='pud-con center-flex'>
                        <UserDataCon className='profile-udc' />
                    </div>
                    <div className='fake-right-con'>
                        <EditProfileButton />
                    </div>
                </div>


            </profile-user-data>
        );
    }
}

export default ProfileUserData;