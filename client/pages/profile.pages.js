import React, { Component } from 'react';
import Profile from '../components/Profile/Profile';
import ProfileDrawer from '../components/ProfileDrawer/ProfileDrawer';

class ProfilePage extends Component {
    render() {
        return (
            <div>
                <Profile />
                <ProfileDrawer />
            </div>
        );
    }
}

export default ProfilePage;