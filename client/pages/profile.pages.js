import React, { Component } from 'react';
import ProfileView from 'components-smart/ProfileView/ProfileView';
import ProfileDrawer from 'components-smart/ProfileDrawer/ProfileDrawer';
import store from 'store';

class ProfilePage extends Component {

    render() {
        return (
            <div>
                <ProfileView />
            </div>
        );
    }
}

export default ProfilePage;