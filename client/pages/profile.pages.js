import React, { Component } from 'react';
import Profile from 'components-smart/Profile/Profile';
import ProfileDrawer from 'components-smart/ProfileDrawer/ProfileDrawer';

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