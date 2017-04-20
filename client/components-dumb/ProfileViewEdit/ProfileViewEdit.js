import React, { Component } from 'react';
import ProfileEditUserData from 'components-smart/ProfileEditUserData/ProfileEditUserData';
import ProfileEditTabs from 'components-smart/ProfileEditTabs/ProfileEditTabs';
import ProfileOverlay from 'components-smart/ProfileOverlay/ProfileOverlay';
import ProfileBackPic from 'components-smart/ProfileBackPic/ProfileBackPic';
import ProfileEditDetail from 'components-smart/ProfileEditDetail/ProfileEditDetail';
import storage from 'store2';
import { getProfile } from 'actions/profile.action';
import store from 'store';

class ProfileViewEdit extends Component {

    componentWillMount() {
        const userId = storage.session('ss.profile.user.id');
        store.dispatch(getProfile(userId, true));
    }

    render() {
        console.log('profile-view-edit')
        return (
            <profile>
                <ProfileBackPic />
                <div className='pos-relative'>
                    <ProfileEditUserData />
                    <div className='all-center-flex life-container'>
                        <div className='life-left-con'>
                            <ProfileEditDetail />
                        </div>
                        <div className='life-center-con'>
                            <ProfileEditTabs />
                        </div>
                        <div className='life-right-con'>
                        </div>
                    </div>
                    <ProfileOverlay />
                </div>
            </profile>
        )
    }
}

export default ProfileViewEdit;